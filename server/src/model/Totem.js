const { supabase } = require('../database');


exports.createTotem = async ( nome_bebida, tipo_bebida,valor_bebida ) => {
  const {totem , error } = await supabase.from('Totem').insert({nome_bebida:nome_bebida , tipo_bebida: tipo_bebida,valor_bebida: valor_bebida }, { returning: 'minimal'});
  if (error){
    console.log('Deu erro');
    console.log(error)
  }
  return totem;
};
