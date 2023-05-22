const { supabase } = require('../database');


exports.createVenda = async (id_itemtotem,id_totem, valor_venda) => {
  const { venda, error } = await supabase.from('Venda').insert({ id_itemtotem: id_itemtotem, id_totem: id_totem, valor_venda: valor_venda}, { returning: 'minimal' });
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  return  venda 
};