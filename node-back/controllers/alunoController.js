

/*Contém a lógica da aplicação (ex.: CRUD) e atua como intermediário entre o modelo e as rotas.
Responsabilidades:
Define funções para cada operação necessária, como criar, ler, atualizar e excluir (CRUD).
ocessa dados se necessário e retorna a resposta correta para o cliente.Usa o modelo (models.js) para interagir com o MongoDB, pr
Mantém o código mais organizado e facilita a manutenção, pois centraliza a lógica da aplicação em um só lugar.
*/

// Importar o modelo de aluno 
// Aqui, o código importa o modelo de dados chamado alunoModel. Esse modelo contém a estrutura do Aluno no banco de dados (MongoDB) e é utilizado para fazer operações de CRUD
const alunoModel = require('../models/aluno');

// Lógica para obter todos os alunos
exports.obterTodos = async (req, res) => { //recebe a requisição e a resposta
    try {
        const alunos = await alunoModel.find(); //esperar todos os alunos do banco de dados
        res.status(200).json(alunos); //retorna com status http 200 e o array de alunos
    } catch (error) {
        res.status(400).json({ error: error }); //retorna com status http 400 e a mensagem de erro
    }
};

// Lógica para obter um aluno específico pelo RA
exports.obterPorRA = async (req, res) => {
   const { ra } = req.params; // extrair o RA dos parâmetros da URL

    try {
        const aluno = await alunoModel.findOne({ ra }); // buscar o aluno pelo RA
        
        if (aluno) {
            res.status(200).json(aluno); // Retorna o aluno com 200 se estiver ok 
        } else {
            res.status(404).json({ message: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Lógica para obter todas as disciplinas de um aluno específico pelo RA
exports.obterDisciplinas = async (req, res) => {
    const { ra } = req.params; // extrair o RA dos parâmetros da URL

    try {
        const aluno = await alunoModel.findOne({ ra });
        
        if (aluno) {
            res.status(200).json(aluno.disciplinas); // Retorna apenas as disciplinas do aluno
        } else {
            res.status(404).json({ message: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lógica para atualizar os dados de um aluno pelo RA
exports.atualizarAluno = async (req, res) => {
    const { ra } = req.params; // extrair o RA dos parâmetros da URL
    const novosDados = req.body; // dados atualizados do aluno enviados pelo cliente

    try {
        const alunoAtualizado = await alunoModel.findOneAndUpdate({ ra }, novosDados, { new: true });

        if (alunoAtualizado) {
            res.status(200).json(alunoAtualizado); // Retorna o aluno atualizado
        } else {
            res.status(404).json({ message: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
