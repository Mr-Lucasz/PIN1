const { supabase } = require('../database');


exports.createVenda = async (id_itemtotem,id_totem, valor_venda) => {
  const { data, error } = await supabase.from('Venda').insert({ id_itemtotem: id_itemtotem, id_totem: id_totem, valor_venda: valor_venda}, { returning: 'minimal' }).select();
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  console.log(data);
  return  {data,error};
};