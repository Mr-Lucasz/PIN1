const { supabase } = require('../database');
const modelReposicao = require('../model/Reposicao');

exports.createReposicao = async (req,res) => {

    const { status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao,id_totem} = req.body;

    try{
        //Chama o metodo createReposicao do modelo
        const reposicao = await modelReposicao.createReposicao(status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao,id_totem)
        //retorna resposta com mensamge de sucesso 
        res.status(201).json({
            message: 'Reposição realizada com sucesso!', reposicao});
    }catch(error){
        //em caso de erro, retorna a mensagem de erro
        console.error(error);
        res.status(500).json(
            {message : 'Erro ao realizar reposição!'});
    }

};

exports.updateReposicao = async (req,res) => {
    const {id_reposicao,status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao,id_totem} = req.body;
    
    try {
        const { data, error } = await modelReposicao.updateReposicao(id_reposicao,status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao,id_totem);
        if (data && data.length) {
            res.status(201).json({
                message: 'Reposição realizada com sucesso!',data
            });
        } else {
            throw Error('Erro ao realizar reposição totem!')
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

}