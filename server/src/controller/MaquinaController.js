const { supabase } = require('../database');
const modelmaquina = require('../model/Bebida');


exports.createMaquina = async (req, res) => {

  const {status_maquina, local_maquina } = req.body;

  try {
   const maquina = await modelmaquina.createMaquina(status_maquina, local_maquina);

   res.status(201).json({ 
    message: 'Maquina criada com sucesso!', maquina });
  } catch (error) {
    console.error(error);
    res.status(500).json(
      { message: 'Erro ao criar Maquina!' });
  }
};

exports.updateBebida = async (req, res) => {
    const {id_maquina,status_maquina, local_maquina} = req.body;
  
    try {
     const bebida = await modelmaquina.updateBebida(id_maquina,status_maquina, local_maquina);
     res.status(201).json({ 
      message: 'Maquina editada com sucesso!', maquina });
    } catch (error) {
      console.error(error);
      res.status(500).json(
        { message: 'Erro ao editar a Maquina!' });
    }
  };