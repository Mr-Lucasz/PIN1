const { supabase } = require('../database');


exports.createTotem = async ( id_maquina, nome_totem ) => {
  const { data, error } = await supabase.from('Totem').insert({id_maquina:id_maquina, nome_totem:nome_totem }, { returning: 'minimal'}).select();
  if (error){
    console.log('Deu erro');
    console.log(error)
  }
  return {data,error};
};

exports.updateTotem = async (id_totem,id_maquina, nome_totem) => {
  const { data, error } = await supabase.from('Totem').update({ id_maquina:id_maquina, nome_totem:nome_totem}).eq('id_totem', id_totem).select()
  console.log(error);
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  //console.log(error);
  console.log(data);
  return  {data,error};
};

exports.selectTotem = async () => {
  const { data, error } = await supabase.from('Totem').select(`id_totem, nome_totem`);
  if (error) {
      console.log('deu erro');
      console.log(error)
  }
  return { data, error };
};