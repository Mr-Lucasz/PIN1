const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria uma instância do roteador do Express
const authController = require('./controller/AuthController'); // Importa o controlador do usuário se for criar o controlador do usuário
const bebidaController = require('./controller/BebidaController');





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

module.exports = router;

