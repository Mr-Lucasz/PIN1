const { supabase } = require('../database');


exports.createPagamento = async (id_venda, status_venda) => {
  const { data, error } = await supabase.from('pagamento').insert({ id_venda: id_venda, status_venda: status_venda}, { returning: 'minimal' }).select();
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  console.log(data);
  return  {data,error};
};


