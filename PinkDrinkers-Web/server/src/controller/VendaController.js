const { supabase } = require('../database');
const modelvenda = require('../model/Venda');


exports.createVenda = async (req, res) => {

  const {id_itemtotem,id_totem, valor_venda} = req.body;

  try {
   const {data, error} = await modelvenda.createVenda(id_itemtotem,id_totem, valor_venda);

   if (data && data.length) {
    res.status(201).json({
      message: 'Venda criar com sucesso!',
      data
    });
  } else {
    throw Error('Erro ao criar Venda!')
  }
} catch (error) {
  console.log(error);
  res.status(500).json({ message: error.message });
}
};

