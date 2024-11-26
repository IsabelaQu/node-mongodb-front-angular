
//Define a estrutura de dados (schema) e o modelo para os documentos armazenados no MongoDB.
//Especifica o esquema dos dados com mongoose.Schema (ex.: um esquema para um aluno com campos nome, ra, idade, etc.).
//Cria o modelo com mongoose.model, o qual é usado para interagir com a coleção correspondente no MongoDB.

const mongoose = require('mongoose');
const Aluno = mongoose.model('Aluno', { //modelo para alunos
    ra: String,
    nome: String,
    disciplinas: [ //array de objetos
        {
            codigo: String,
            nome: String,
            professor: String
        }
    ]
});
module.exports = Aluno;