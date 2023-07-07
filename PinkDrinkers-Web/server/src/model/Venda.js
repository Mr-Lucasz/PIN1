const { supabase } = require('../database');


exports.createVenda = async (id_bebida,id_totem, valor_venda) => {
  
  const { data, error } = await supabase.from('venda').insert({ id_bebida: id_bebida, id_totem: id_totem, valor_venda: valor_venda}, { returning: 'minimal' }).select();
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  return  {data,error};
};

exports.retiraItemTotem = async (id_itemtotem) => {
  const { data, error } = await supabase.from('item_totem').delete().eq('id_itemtotem', id_itemtotem);
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  return  {data,error};
};

exports.procuraIdBebida = async (id_itemtotem) => {
  const { data, error } = await supabase
  .from('item_totem')
  .select('id_bebida').eq('id_itemtotem',id_itemtotem);

  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  return  {data,error};
};