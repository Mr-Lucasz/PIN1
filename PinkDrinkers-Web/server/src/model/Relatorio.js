const { supabase } = require('../database');

exports.relatorioTotem = async (id_totem, dataIni, dataFim) => {
 
    const { data, error } = await supabase
    .from('Venda')
    .select('id_venda, Totem(nome_totem),Item_totem(Bebida(nome_bebida)),valor_venda,data_venda')
    .gte('data_venda', dataIni)
    .lte('data_venda', dataFim).eq('id_totem', id_totem);
  console.log(data)
    if (error) {
        console.log('deu erro');
        console.log(error)
    }
    return { data, error };
  };