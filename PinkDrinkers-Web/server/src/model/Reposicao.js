const { supabase } = require('../database');


exports.createReposicao = async (status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao,id_totem) => {
  const { data, error } = await supabase.from('Reposicao').insert({ status_reposicao: status_reposicao, observacao_reposicao: observacao_reposicao, id_itemestoque:id_itemestoque, data_reposicao: data_reposicao, id_totem: id_totem }, { returning :'minimal'}).select()
  if (error) {
    console.log('Deu erro aqui');
    console.log(error)
  }
  return { data, error };
};

exports.updateReposicao = async (id_reposicao,status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao,id_totem) => {
const { data, error } = await supabase.from('Reposicao').update({id_reposicao:id_reposicao,status_reposicao:status_reposicao, observacao_reposicao:observacao_reposicao, id_itemestoque:id_itemestoque, data_reposicao:data_reposicao,id_totem:id_totem}).eq('id_reposicao',id_reposicao).select()
if(error){
  console.log('deu erro');
  console.log(error)
}
console.log(data);
return {data,error};
};

exports.listaReposicao = async () => {
  const { data, error } = await supabase.from('Reposicao').select(`id_reposicao, Totem(nome_totem),Item_estoque(Bebida(nome_bebida)), status_reposicao, data_reposicao`);
  if (error) {
      console.log('deu erro');
      console.log(error)
  }
  return { data, error };
};

exports.reposicaoById = async (id_reposicao) => {
  const { data, error } = await supabase.from('Reposicao').select('id_reposicao, id_itemestoque, id_totem, status_reposicao,observacao_reposicao, data_reposicao').eq('id_reposicao', id_reposicao);

  if (error) {
      console.log('deu erro');
      console.log(error)
  }
  return { data, error };
};