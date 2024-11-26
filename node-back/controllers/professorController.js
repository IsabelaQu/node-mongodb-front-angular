

const ProfessorModel = require('../models/professor');

// Função para listar todos os professores
exports.listarTodos = async (req, res) => {
    try {
        const professores = await ProfessorModel.find(); //await espera o find rodar e retorna o resultado
        res.status(200).json(professores); //retorna com status http 200 e o array de alunos
    } catch (error) {
        res.status(400).json({ error: error }); //retorna com status http 400 e a mensagem de erro
    }
};

// Função para buscar um professor por ID
exports.buscarPorId = async (req, res) => {
    const { id } = req.params; // Extrai o ID dos parâmetros da URL
    try {
        const professor = await ProfessorModel.findOne({ id }); // Busca o professor pelo ID
        if (professor) {
            res.status(200).json(professor); // Retorna o professor encontrado
        } else {
            res.status(404).json({ message: 'Id não existente' }); // Caso não encontre
        }
    } catch (error) {
        res.status(500).json({ error: error.message }); // Retorna erro caso ocorra
    }
};


// Função para listar todas as turmas de um professor
exports.listarTurmas = async (req, res) => {
    const { id } = req.params; // Extrai o ID dos parâmetros da URL
    try {
        const professor = await ProfessorModel.findOne({ id }); // Busca o professor
        if (professor) {
            res.status(200).json(professor.turmas); // Retorna as turmas do professor
        } else {
            res.status(404).json({ message: 'Id não existente' }); // Caso não encontre
        }
    } catch (error) {
        res.status(500).json({ error: error.message }); // Retorna erro caso ocorra
    }
};


// Função para atualizar os dados de um professor
exports.atualizarProfessor = async (req, res) => {
    const { id } = req.params; // Extrai o ID dos parâmetros da URL
    const novosDados = req.body; // Extrai os novos dados do corpo da requisição

    try {
        const professorAtualizado = await ProfessorModel.findOneAndUpdate({ id }, novosDados, { new: true }); // Atualiza os dados do professor

        if (professorAtualizado) {
            res.status(200).json(professorAtualizado); // Retorna o professor atualizado
        } else {
            res.status(404).json({ message: 'Id não existente' }); // Caso não encontre
        }
    } catch (error) {
        res.status(500).json({ error: error.message }); // Retorna erro caso ocorra
    }
};

// Função para adicionar uma turma a um professor
exports.adicionarTurma = async (req, res) => {
    const { id } = req.params; // Extrai o ID dos parâmetros da URL
    const { codigo, disciplina, alunos } = req.body; // Extrai os dados da nova turma

    try {
        const professor = await ProfessorModel.findOne({ id }); // Busca o professor
        if (professor) {
            professor.turmas.push({ codigo, disciplina, alunos }); // Adiciona a turma ao professor
            await professor.save(); // Salva o professor com a nova turma
            res.status(201).json(professor); // Retorna o professor atualizado
        } else {
            res.status(404).json({ message: 'Id não existente' }); // Caso não encontre
        }
    } catch (error) {
        res.status(400).json({ error: error.message }); // Retorna erro caso ocorra
    }
};


// Função para listar professores por departamento
exports.listarPorDepartamento = async (req, res) => {
    const { departamento } = req.params; // Extrai o nome do departamento dos parâmetros

    try {
        const professores = await ProfessorModel.find({ departamento }); // Busca professores pelo departamento
        res.status(200).json(professores); // Retorna os professores encontrados
    } catch (error) {
        res.status(500).json({ error: error.message }); // Retorna erro caso ocorra
    }
};

// Função para remover um professor
exports.removerProfessor = async (req, res) => {
    const { id } = req.params; // Extrai o ID dos parâmetros da URL
    try {
        const professorRemovido = await ProfessorModel.findOneAndDelete({ id }); // Deleta o professor
        if (professorRemovido) {
            res.status(200).json({ message: 'Professor removido com sucesso' }); // Retorna mensagem de sucesso
        } else {
            res.status(404).json({ message: 'Id não existente' }); // Caso não encontre
        }
    } catch (error) {
        res.status(500).json({ error: error.message }); // Retorna erro caso ocorra
    }
};
