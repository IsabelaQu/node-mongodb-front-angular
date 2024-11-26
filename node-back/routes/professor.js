
//Usa o Router do Express para mapear os métodos HTTP (GET, POST, PUT, DELETE) para os endpoints correspondentes.
//Cada rota chama um método específico do controller para realizar as operações.

const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

// Listar todos os professores
//professores
router.get('/', professorController.listarTodos);

// Buscar professor por ID
//professores/1
router.get('/:id', professorController.buscarPorId);

// Listar todas as turmas de um professor
//professores/1/turmar
router.get('/:id/turmas', professorController.listarTurmas);

// Atualizar dados de um professor
//professores/1
router.put('/:id', professorController.atualizarProfessor);

// Adicionar uma turma para um professor 
// professores/1/turmas
router.post('/:id/turmas', professorController.adicionarTurma);

// Listar professores por departamento
//professores/departamento/Administração
router.get('/departamento/:departamento', professorController.listarPorDepartamento);

// Remover um professor
//professores/1
router.delete('/:id', professorController.removerProfessor);

module.exports = router;
