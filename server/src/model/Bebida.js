const { supabase } = require('../database');


exports.createBebida = async (req, res) => {
  const { nome_bebida, tipo_bebida,valor_bebida } = req.body;
  const { bebida, error } = await supabase.bebida.create({
    nome_bebida,
    tipo_bebida,
    valor_bebida
  });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  return res.json({ bebida });
};


exports.updateBebida = async (req, res) => {
  const { id_bebida, nome_bebida, tipo_bebida,valor_bebida } = req.body;
  const { bebida, error } = await supabase.bebida.update({
    where: { id_bebida: id_bebida },
      data: {
        nome_bebida,
        tipo_bebida,
        valor_bebida
      },
  });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  return res.json({ bebida });
};