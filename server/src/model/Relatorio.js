const { supabase } = require('../database');

exports.relatorioVenda = async (dataIni, dataFim) => {
 
    const { data, error } = await supabase
    .from('venda')
    .select('id_venda, Totem(nome_totem),item_totem(Bebida(nome_bebida)),valor_venda,data_venda')
    .gte('data_venda', dataIni)
    .lte('data_venda', dataFim);
  console.log(data)
    if (error) {
        console.log('deu erro');
        console.log(error)
    }
    return { data, error };
  };

  exports.relatorioBebidas= async ( dataIni, dataFim) => {
 
    const { data, error } = await supabase
    .from('Item_estoque ')
    .select('Bebida(nome_bebida, tipo_bebida, valor_bebida)')
    .gte('created_at', dataIni)
    .lte('created_at', dataFim);
  console.log(data)
    if (error) {
        console.log('deu erro');
        console.log(error)
    }
    return { data, error };
  };

  exports.relatorioReposicoes = async ( dataIni, dataFim) => {
 
    const { data, error } = await supabase
    .from('Reposicao')
    .select('Item_estoque(Bebida(nome_bebida)),status_reposicao,observacao_reposicao,data_reposicao')
    .gte('data_reposicao', dataIni)
    .lte('data_reposicao', dataFim);
  console.log(data)
    if (error) {
        console.log('deu erro');
        console.log(error)
    }
    return { data, error };
  };

  exports.relatorioMaquinas = async ( dataIni, dataFim) => {
 
    const { data, error } = await supabase
    .from('Maquina')
    .select('local_maquina, status_maquina')
    .gte('created_at', dataIni)
    .lte('created_at', dataFim);
  console.log(data)
    if (error) {
        console.log('deu erro');
        console.log(error)
    }
    return { data, error };
  };