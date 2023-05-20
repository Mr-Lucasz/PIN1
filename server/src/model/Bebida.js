const { supabase } = require('../database');


exports.createBebidaTeste = async (nome_bebida, tipo_bebida,valor_bebida) => {
  const { bebida, error } = await supabase.from('Bebida').insert({ nome_bebida: nome_bebida, tipo_bebida: tipo_bebida, valor_bebida: valor_bebida }, { returning: 'minimal' });
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  return  bebida;
};


exports.updateBebida = async (id_bebida, nome_bebida, tipo_bebida,valor_bebida) => {
  const { bebida, error } = await supabase.from('Bebida').update({ nome_bebida: nome_bebida, tipo_bebida: tipo_bebida, valor_bebida:valor_bebida}).eq('id_bebida', id_bebida)
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  return  bebida;
};