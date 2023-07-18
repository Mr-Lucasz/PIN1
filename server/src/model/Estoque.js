const { supabase } = require('../database');

exports.createEstoque = async (id_itemestoque, id_bebida) => {
    const { data, error } = await supabase
      .from('Item_estoque')
      .insert({ id_itemestoque: id_itemestoque, id_bebida: id_bebida }, { returning: 'minimal' })
      .select();
    if (error) {
        console.log('Deu erro aqui');
        console.log(error)
    }
    return { data, error };
};
//PARA ATUALIZAR O ESTOQUE (ex: Dado momento inclui errado e quero so arrumar)
exports.updateEstoque = async (id_itemestoque, id_bebida) => {
    const { data, error } = await supabase.from('Item_estoque').update({ id_bebida: id_bebida }).eq('id_itemestoque', id_itemestoque).select();
    if (error) {
        console.log('deu erro');
        console.log(error)
    }
    console.log(data);
    return { data, error };
};


//Funcão para Deletar o estoque
exports.deleteEstoque = async (id_itemestoque) => {
    const { data, error } = await supabase.from('Item_estoque').delete({ id_itemestoque:id_itemestoque }).eq('id_itemestoque', id_itemestoque).select();
    if (error) {
        console.log('deu erro');
        console.log(error)
    }
    return { data, error };
};

exports.selectEstoque = async () => {
    const { data, error } = await supabase.from('Item_estoque').select(`id_itemestoque,Bebida(id_bebida, nome_bebida, valor_bebida)`);
    if (error) {
        console.log('deu erro');
        console.log(error)
    }
    return { data, error };
};