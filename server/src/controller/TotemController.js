//TESTE GIT
const { supabase } = require('../database');
const modelTotem = require('../model/Totem');

exports.createTotem = async (req, res) => {

    const { nome_bebida, tipo_bebida, valor_bebida } = req.body;
    // Chama o metodo criarTotem do modelo 
    const totem = await modelTotem.createTotem(nome_bebida, tipo_bebida, valor_bebida); try {
    res.status(201).json({
        message: 'Totem criado com sucesso!', totem});
    } catch (error) {
        //Em caso de erro, retorna mensagem de erro
        console.log(error);
        res.status(500).json(
            {message : 'Erro ao criar Totem'});
    }
};
