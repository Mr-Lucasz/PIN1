const { supabase } = require('../database');


exports.createBebida = async (nome_bebida, tipo_bebida,valor_bebida) => {
  const { data, error } = await supabase.from('Bebida').insert({ nome_bebida: nome_bebida, tipo_bebida: tipo_bebida, valor_bebida: valor_bebida }, { returning: 'minimal' }).select();
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  console.log(data);
  return  {data,error};
};


exports.updateBebida = async (id_bebida, nome_bebida, tipo_bebida,valor_bebida) => {
  const { data, error } = await supabase.from('Bebida').update({ nome_bebida: nome_bebida, tipo_bebida: tipo_bebida, valor_bebida:valor_bebida}).eq('id_bebida', id_bebida).select();
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  console.log(data);
  return  {data,error};
};