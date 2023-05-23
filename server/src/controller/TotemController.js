const { supabase } = require('../database');
const modelTotem = require('../model/Totem');

exports.createTotem = async (req, res) => {

    const { id_maquina, nome_totem } = req.body;
    // Chama o metodo criarTotem do modelo 
    try {
        const { data, error } = await modelTotem.createTotem(id_maquina, nome_totem);
        if (data && data.length) {
            res.status(201).json({
                message: 'Totem criado com sucesso!', data
            });
        } else {
            throw Error('Erro ao criar totem!')
        }
    } catch (error) {
        //Em caso de erro, retorna mensagem de erro
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

exports.updateTotem = async (req, res) => {
    const { id_totem, id_maquina, nome_totem } = req.body;

    try {
        const { data, error } = await modelTotem.updateTotem(id_totem, id_maquina, nome_totem);
        if (data && data.length) {
            res.status(201).json({
                message: 'Totem atualizado com sucesso!',data
            });
        } else {
            throw Error('Erro ao atualizar totem!')
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};