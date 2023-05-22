const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria uma instância do roteador do Express
const authController = require('./controller/AuthController'); // Importa o controlador do usuário se for criar o controlador do usuário
const bebidaController = require('./controller/BebidaController');
const vendaController = require('./controller/VendaController');
const funcionarioController = require('./controller/FuncionarioController');
const maquinaController = require('./controller/MaquinaController');
const totemController = require('./controller/TotemController');



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
router.post('/newTotem',totemController.createTotem);

//Rota de atualizar totem
router.post('/updateTotem',totemController.updateTotem);


module.exports = router;

