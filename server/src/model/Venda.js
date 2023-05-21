const { supabase } = require('../database');


exports.createBebida = async (req, res) => {
  const { id_itemtotem,id_totem, valor_venda,data_venda } = req.body;
  const { venda, error } = await supabase.bebida.create({
    id_itemtotem,
    id_totem,
    valor_venda,
    data_venda
  });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  return res.json({ venda });
};