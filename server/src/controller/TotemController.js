const { supabase } = require('../database');
const modelTotem = require('../model/Totem');

exports.createTotem = async (req, res) => {

    const { id_maquina, nome_totem } = req.body;
    // Chama o metodo criarTotem do modelo 
    try {
        const totem = await modelTotem.createTotem(id_maquina, nome_totem); 
    res.status(201).json({
        message: 'Totem criado com sucesso!', totem});
    } catch (error) {
        //Em caso de erro, retorna mensagem de erro
        console.log(error);
        res.status(500).json(
            {message : 'Erro ao criar Totem'});
    }
};

exports.updateTotem = async (req, res) => {
    const { id_totem, id_maquina, nome_totem } = req.body;

    try {
        const totemUpdate = await modelTotem.updateTotem(id_totem,id_maquina, nome_totem);
        if (totemUpdate) {
            res.status(201).json({
              message: 'Totem atualizado com sucesso!',
              totemUpdate
            });
          } else {
            res.status(500).json({ message: 'Erro ao atualizar Totem' });
          }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao atualizar Totem' });
    }
};