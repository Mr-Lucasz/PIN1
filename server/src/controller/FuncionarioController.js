const { supabase } = require('../database');
const modelfuncionario = require('../model/Funcionario');


exports.createFuncionario = async (req, res) => {

  const {nome, email, password} = req.body;

  try {
   const funcionario = await modelfuncionario.createFuncionario(nome, email, password);

   res.status(201).json({ 
    message: 'Funcionario cadastrado com sucesso!', funcionario });
  } catch (error) {
    console.error(error);
    res.status(500).json(
      { message: 'Erro ao cadastrar Funcionario!' });
  }
};

exports.updateFuncionario = async (req, res) => {
    const {id_funcionario, nome, email, password} = req.body;
  
    try {
     const funcionario = await modelfuncionario.updateFuncionario(id_funcionario, nome, email, password);
     res.status(201).json({ 
      message: 'Funcionario editado com sucesso!', funcionario });
    } catch (error) {
      console.error(error);
      res.status(500).json(
        { message: 'Erro ao editar o Funcionario!' });
    }
  };