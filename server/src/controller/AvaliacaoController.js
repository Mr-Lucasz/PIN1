const { supabse } = require('../database');
const modelAvaliacao = require('../model/Avaliacao');

exports.insereAvaliacao = async (req, res) => {

    const { nota_avaliacao, id_venda } = req.body;

    try {
        const { data, error } = await modelAvaliacao.createAvaliacao(nota_avaliacao, id_venda);
        if (data && data.length) {
            res.status(201).json({
                message: 'Avaliação Realizada com sucesso!',
                data
            });
        } else {
            throw Error('Erro ao Avaliar!')
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};