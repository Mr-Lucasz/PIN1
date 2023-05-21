const { supabase } = require('../database');
const modelbebida = require('../model/Bebida');


exports.createBebida = async (req, res) => {

  const { nome_bebida, tipo_bebida,valor_bebida } = req.body;

  try {
   // Chama o método createbebida do modelo para criar uma bebida no Supabase
   const bebida = await modelbebida.createBebidaTeste(nome_bebida, tipo_bebida, valor_bebida);
   // Retorna a resposta com mensagem de sucesso e dados da bebida
   res.status(201).json({ 
    message: 'Bebida criada com sucesso!', bebida });
  } catch (error) {
    // Em caso de erro, retorna a mensagem de erro e status HTTP 500
    console.error(error);
    res.status(500).json(
      { message: 'Erro ao criar bebida!' });
  }
};

exports.updateBebida = async (req, res) => {
    // Extrai email e senha do body da requisição
    const {id_bebida, nome_bebida, tipo_bebida, valor_bebida } = req.body;
  
    try {
     // Chama o método updateBebida do modelo  para edita uma bebida no Supabase
     const bebida = await modelbebida.updateBebida(id_bebida,nome_bebida, tipo_bebida, valor_bebida);
  
     // Retorna a resposta com mensagem de sucesso e dados da bebida
     res.status(201).json({ 
      message: 'Bebida editada com sucesso!', bebida });
    } catch (error) {
      // Em caso de erro, retorna a mensagem de erro e status HTTP 500
      console.error(error);
      res.status(500).json(
        { message: 'Erro ao editar a bebida!' });
    }
  };