const { supabase } = require('../database');


exports.createBebida = async (req, res) => {
  const { status_maquina, local_maquina } = req.body;
  const { maquina, error } = await supabase.maquina.create({
    status_maquina,
    local_maquina
  });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  return res.json({ maquina });
};