const { supabase } = require('../database');


exports.createMaquina = async (status_maquina, local_maquina) => {
  const { data, error } = await supabase.from('Maquina').insert({status_maquina: status_maquina, local_maquina:local_maquina}, { returning: 'minimal' }).select();
  if (error) {
    console.log('deu erro');
    console.log(error);
  }
  console.log(data);
  return  {data,error};
};

exports.updateMaquina = async (id_maquina,status_maquina, local_maquina) => {
  const { data, error } = await supabase.from('Maquina').update({ status_maquina: status_maquina, local_maquina:local_maquina}).eq('id_maquina', id_maquina).select();
  if (error) {
    console.log('deu erro');
    console.log(error);
  }
  console.log(data);
  return  {data,error};
};