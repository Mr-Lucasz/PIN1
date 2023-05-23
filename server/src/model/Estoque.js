const { supabase } = require('../database');

exports.createEstoque = async (id_bebida) => {
    const { data, error } = await supabase.from('item_estoque').insert({ id_bebida: id_bebida }, { returning: 'minimal' }).select()
    if (error) {
        console.log('Deu erro aqui');
        console.log(error)
    }
    return { data, error };
};
//PARA ATUALIZAR O ESTOQUE (ex: Dado momento inclui errado e quero so arrumar)
exports.updateEstoque = async (id_estoque, id_bebida) => {
    const { data, error } = await supabase.from('item_estoque').update({ id_bebida: id_bebida }).eq('id_estoque', id_estoque)
    if (error) {
        console.log('deu erro');
        console.log(error)
    }
    console.log(data);
    return { data, error };
};


//Para excluir CASO TENHA colocado uma informação errada, tem que testar J.PARRO
exports.deleteEstoque = async (id_estoque,id_bebida) => {
    const { data, error } = await supabase.from('item_estoque').delete({ id_bebida: id_bebida }).eq('id_bebida', id_bebida)
    if (error) {
        console.log('deu erro');
        console.log(error)
    }
    return { data, error };
};