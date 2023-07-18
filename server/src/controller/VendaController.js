const { supabase } = require('../database');
const modelvenda = require('../model/Venda');


exports.createVenda = async (req, res) => {

  const { id_itemtotem, id_totem, valor_venda } = req.body;

  try {
    const consultBebida = await modelvenda.procuraIdBebida(id_itemtotem);

    id_bebida = consultBebida.data[0].id_bebida;

    const { data, error } = await modelvenda.createVenda(id_bebida, id_totem, valor_venda);


    if (data && data.length) {
      const retiraEstoque = await modelvenda.retiraItemTotem(id_itemtotem);
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

