const { supabase } = require('../database');

exports.createEstoque = async (id_bebida) => {
    const { estoque, error } = await supabase.from({ id_bebida: id_bebida }, { returning: 'minimal' });
    if (error) {
        console.log('Deu erro aqui');
        console.log(error)
    }
    return estoque;
};

//Para excluir CASO TENHA colocado uma informação errada, tem que testar J.PARRO
exports.deleteEstoque = async (id_estoque) => {
    const { data, error } = await supabase.from('item_estoque').delete().match({ id: id_estoque });
    if (error) {
        console.log('Erro ao excluir o estoque');
        console.log(error);
        return false;
    }
    return true;
};

//PARA ATUALIZAR O ESTOQUE (ex: Dado momento inclui errado e quero so arrumar)
exports.updateEstoque = async (id_estoque, novoEstoque) => {
    const { data, error } = await supabase
        .from('item_estoque')
        .update({ estoque: novoEstoque })
        .match({ id: id_estoque });

    if (error) {
        console.log('Erro ao atualizar o estoque');
        console.log(error);
        return false;
    }

    return true;
};