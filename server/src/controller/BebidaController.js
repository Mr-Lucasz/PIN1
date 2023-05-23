const { supabase } = require('../database');
const modelbebida = require('../model/Bebida');


exports.createBebida = async (req, res) => {

  const { nome_bebida, tipo_bebida, valor_bebida } = req.body;

  try {
    // Chama o método createbebida do modelo para criar uma bebida no Supabase
    const { data, error } = await modelbebida.createBebida(nome_bebida, tipo_bebida, valor_bebida);
    if (data && data.length) {
      res.status(201).json({
        message: 'Bebida Criada com sucesso!',
        data
      });
    } else {
      throw Error('Erro ao Criar Bebida!')
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateBebida = async (req, res) => {
  // Extrai email e senha do body da requisição
  const { id_bebida, nome_bebida, tipo_bebida, valor_bebida } = req.body;

  try {
    // Chama o método updateBebida do modelo  para edita uma bebida no Supabase
    const { data, error } = await modelbebida.updateBebida(id_bebida, nome_bebida, tipo_bebida, valor_bebida);
    if (data && data.length) {
      res.status(201).json({
        message: 'Bebida editada com sucesso!',
        data
      });
    } else {
      throw Error('Erro ao editar Bebida!')
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};