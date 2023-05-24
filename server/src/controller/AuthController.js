const { supabase } = require('../database');
const user = require('../model/Auth');




// Controlador para login de usuário
exports.login = async (req, res) => {
  // Extrai email e senha do corpo da requisição
  const { email, password } = req.body;



  try {
    // Faz o login do usuário usando o Supabase

    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    // Verifica se ocorreu arslgum erro durante o login
    if (error) {
      throw new Error('Falha ao fazer login: ' + error.message);
    }

    // Retorna os dados do usuário e o token JWT
    return res.json({ data });
  } catch (error) {
    // Em caso de erro, retorna a mensagem de erro e status HTTP 500
    console.error(error);
    res.status(500).json({ message: 'Erro ao fazer login!' });
  }
};


// Controlador para criação de usuário
exports.createUser = async (req, res) => {
  // Extrai email e senha do body da requisição
  const { email, password } = req.body;
  
  try {
    // Chama o método createUser do modelo de autenticação para criar o usuário no Supabase
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });
    if (error) {
      throw new Error('Falha ao criar usuário: ' + error.message);
    }

    // Retorna a resposta com mensagem de sucesso e dados do usuário
    res.status(201).json({
      message: 'Usuário criado com sucesso!', data
    });
  } catch (error) {
    // Em caso de erro, retorna a mensagem de erro e status HTTP 500
    console.error(error);
    res.status(500).json(
      { message: 'Erro ao criar usuário!' });
  }
};


// Controlador para logout de usuário
exports.logout = async (req, res) => {
  try {
    // Faz logout do usuário usando o Supabase

    let { error } = await supabase.auth.signOut()

    // Verifica se ocorreu algum erro durante o logout
    if (error) {
      throw new Error('Falha ao fazer logout: ' + error.message);
    }

    // Retorna a mensagem de sucesso
    return res.json({ message: 'Logout realizado com sucesso!' });
  } catch (error) {
    // Em caso de erro, retorna a mensagem de erro e status HTTP 500
    console.error(error);
    res.status(500).json({ message: 'Erro ao fazer logout!' });
  }
};
