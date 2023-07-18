const { supabse } = require('../database');
const modelPagamento = require('../model/Pagamento');

exports.confirmaPagamento = async (req, res) => {

    const { id_venda, status_venda } = req.body;

    try {
        
        const { data, error } = await modelPagamento.createPagamento(id_venda, status_venda);
        if (data && data.length) {
            res.status(201).json({
                message: 'Pagamento recebido com sucesso!',
                data
            });
        } else {
            throw Error('Erro ao inserir o pagamento!')
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};