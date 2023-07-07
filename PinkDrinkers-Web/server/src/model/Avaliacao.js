const { supabase } = require('../database');


exports.createAvaliacao = async (nota_avaliacao, id_venda) => {
  const { data, error } = await supabase.from('avaliacao').insert({ nota_avaliacao: nota_avaliacao, id_venda: id_venda}, { returning: 'minimal' }).select();
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  console.log(data);
  return  {data,error};
};


