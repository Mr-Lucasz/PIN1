const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria uma instância do roteador do Express
const authController = require('./controller/AuthController'); // Importa o controlador do usuário se for criar o controlador do usuário
const bebidaController = require('./controller/BebidaController');
const vendaController = require('./controller/VendaController');
const funcionarioController = require('./controller/FuncionarioController');
const maquinaController = require('./controller/MaquinaController');
const totemController = require('./controller/TotemController');
const reposicaoController = require('./controller/ReposicaoController');
const estoqueController = require('./controller/EstoqueController');

// Rota de autenticação
router.post('/login', authController.login);

//Rota de Criar Usuário- pagina de Cadastro
router.post('/users', authController.createUser);

// Rota de logout
router.post('/logout', authController.logout);

// Rota de criar bebida
router.post('/newbebida', bebidaController.createBebida);

// Rota de atualiza bebida
router.post('/updatebebida', bebidaController.updateBebida);

//Rota criar venda
router.post('/newvenda', vendaController.createVenda);

//Rota criar maquina
router.post('/newmaquina', maquinaController.createMaquina);

// Rota de atualiza maquina
router.post('/updatemaquina', maquinaController.updateMaquina);

//Rota criar funcionario
router.post('/newfuncionario', funcionarioController.createFuncionario);

// Rota de atualiza funcionario
router.post('/updatefuncionario', funcionarioController.updateFuncionario);

//Rota criar Totem
router.post('/newtotem',totemController.createTotem);

//Rota de atualizar totem
router.post('/updatetotem',totemController.updateTotem);

//Rota criar Reposicao
router.post('/newreposicao',reposicaoController.createReposicao);

//Rota de atualizar totem
router.post('/updatereposicao',reposicaoController.updateReposicao);

//Rota para criar estoque
router.post('/newestoque',estoqueController.createEstoque);

//Rota para atualizar estoque 
router.post('/updateestoque',estoqueController.updateEstoque);

//Rota para deletar estoque
router.post('/deleteestoque',estoqueController.deleteEstoque);

router.get('/selectestoque',estoqueController.selectEstoque);

router.get('/selecttotem',totemController.selectTotem);

router.get('/selectmaquina',maquinaController.selectMaquina);

router.get('/selectbebida',bebidaController.selectBebida);

module.exports = router;

