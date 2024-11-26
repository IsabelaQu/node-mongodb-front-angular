
//Define a estrutura de dados (schema) e o modelo para os documentos armazenados no MongoDB.
//Especifica o esquema dos dados com mongoose.Schema (ex.: um esquema para um aluno com campos nome, ra, idade, etc.).
//Cria o modelo com mongoose.model, o qual é usado para interagir com a coleção correspondente no MongoDB.

const mongoose = require('mongoose');
const Professor = mongoose.model('professor', { //modelo para professores
    id: String,
    nome: String,
    idade: Number,
    departamento: String,
    turmas: [
        {
        codigo: String,
        disciplina: String,
        alunos: [String]
    }
    ]
});
module.exports = Professor;