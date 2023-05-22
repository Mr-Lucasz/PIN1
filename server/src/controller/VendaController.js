const { supabase } = require('../database');
const modelvenda = require('../model/Venda');


exports.createVenda = async (req, res) => {

  const {id_itemtotem,id_totem, valor_venda} = req.body;

  try {
   const maquina = await modelvenda.createVenda(id_itemtotem,id_totem, valor_venda);

   res.status(201).json({ 
    message: 'Venda realizada com sucesso!', maquina });
  } catch (error) {
    console.error(error);
    res.status(500).json(
      { message: 'Erro ao realizar a Venda!' });
  }
};

