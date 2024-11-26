
//Usa o Router do Express para mapear os métodos HTTP (GET, POST, PUT, DELETE) para os endpoints correspondentes.
//Cada rota chama um método específico do controller para realizar as operações.

const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController.js');

// Rota para obter todos os usuários
router.get('/', alunoController.obterTodos);

// Rota para obter um aluno específico pelo RA
router.get('/:ra', alunoController.obterPorRA);

// Rota para obter um aluno específico pelo RA
router.get('/:ra/disciplinas', alunoController.obterDisciplinas);

// Rota para atualizar os dados de um aluno específico pelo RA
router.put('/:ra', alunoController.atualizarAluno);

module.exports = router;
