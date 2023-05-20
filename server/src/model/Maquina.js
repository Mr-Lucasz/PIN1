const { supabase } = require('../database');


exports.createMaquina = async (status_maquina, local_maquina) => {
  const { maquina, error } = await supabase.from('Maquina').insert({ status_maquina, local_maquina}, { returning: 'minimal' });
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  return  maquina;
};

exports.updateMaquina = async (id_maquina,status_maquina, local_maquina) => {
  const { id_maquina,status_maquina, local_maquina } = req.body;
  const { maquina, error } = await supabase.from('Maquina').update({ status_maquina, local_maquina}).eq('id_maquina', id_maquina)
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  return  maquina;
};