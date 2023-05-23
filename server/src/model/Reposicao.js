const { supabase } = require('../database');


exports.createReposicao = async (status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao,id_totem) => {
  const { reposicao, error} = await supabase.from('Reposicao').insert({ status_reposicao: status_reposicao, observacao_reposicao: observacao_reposicao, id_itemestoque:id_itemestoque, data_reposicao: data_reposicao, id_totem: id_totem }, { returning :'minimal'});
  if (error) {
    console.log('Deu erro aqui');
    console.log(error)
  }
  return reposicao;
};