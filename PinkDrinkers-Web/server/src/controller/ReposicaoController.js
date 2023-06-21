const { supabase } = require('../database');
const modelReposicao = require('../model/Reposicao');

exports.createReposicao = async (req,res) => {

    const { status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao,id_totem} = req.body;

    try{
        //Chama o metodo createReposicao do modelo
        const { data, error } = await modelReposicao.createReposicao(status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao,id_totem);
        //retorna data - documentacao do supabase utiliza data para verificar caso deu certo
        if (data && data.length) {
            res.status(201).json({
                message: 'Reposicao criada com sucesso!',data
            });
        } else {
            throw Error('Erro ao criar reposição!')
        }
    } catch (error) {
        //Em caso de erro, retorna mensagem de erro
        console.log(error);
        res.status(500).json({ message: error.message });
    }

};

exports.updateReposicao = async (req,res) => {
    //Chama o metodo updateReposicao do modelo
    const {id_reposicao,status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao,id_totem} = req.body;
    
    try {
        const { data, error } = await modelReposicao.updateReposicao(id_reposicao,status_reposicao, observacao_reposicao, id_itemestoque, data_reposicao,id_totem);
        //retorna data - documentacao do supabase utiliza data para verificar caso deu certo
        if (data && data.length) {
            res.status(201).json({
                message: 'Reposição atualizada com sucesso!',data
            });
        } else {
            throw Error('Erro ao atualizar reposição totem!')
        }
    } catch (error) {
        //Em caso de erro, retorna mensagem de erro
        console.log(error);
        res.status(500).json({ message: error.message });
    }

};

exports.listaReposicao = async (req, res) => {

    try {
        const { data, error } = await modelReposicao.listaReposicao();

        if (data && data.length) {
            res.status(200).json({
                message: 'Econtrado!', data
            });
        } else {
            throw Error('Não encontrado dados!')
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

};

exports.reposicaoById = async (req, res) => {
    const {id_reposicao} = req.params;
    try {
        const { data, error } = await modelReposicao.reposicaoById(id_reposicao);
        if (data && data.length) {
            res.status(200).json({
                message: 'Econtrado!', data
            });
        } else {
            throw Error('Não encontrado dados!')
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

};