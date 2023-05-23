const { supabase } = require('../database');
const modelmaquina = require('../model/Maquina');


exports.createMaquina = async (req, res) => {

  const {status_maquina, local_maquina } = req.body;

  try {
   const { data, error } = await modelmaquina.createMaquina(status_maquina, local_maquina);
   if (data && data.length) {
    res.status(201).json({
        message: 'Máquina criado com sucesso!', data
    });
} else {
    throw Error('Erro ao criar maquina!')
}
} catch (error) {
//Em caso de erro, retorna mensagem de erro
console.log(error);
res.status(500).json({ message: error.message });
}
};

exports.updateMaquina = async (req, res) => {
    const {id_maquina,status_maquina, local_maquina} = req.body;
  
    try {
     const { data, error } = await modelmaquina.updateMaquina(id_maquina,status_maquina, local_maquina);
     if (data && data.length) {
      res.status(201).json({
          message: 'Maquina atualizado com sucesso!',data
      });
  } else {
      throw Error('Erro ao atualizar maquina!')
  }
} catch (error) {
  console.log(error);
  res.status(500).json({ message: error.message });
}
  };