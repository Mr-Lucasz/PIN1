const { supabse } = require('../database');
const modelEstoque = require('../model/Estoque');

exports.createEstoque = async (req, res) => {

    const { id_bebida } = req.body;

    try {
        //Chama o metodo createEstoque do modelo 
        const estoque = await modelEstoque.createEstoque(id_bebida);
        //Retorna a resposta com a mensagem de sucesso e dados do estoque
        res.status(201).json({
            message: 'Estoque criado com sucesso!', estoque
        });
    } catch (error) {
        //em caso de erro, retorna mensagem de erro e status HTTP 500 
        console.error(error);
        res.status(500).json(
            { message: 'Erro ao criar Estoque!' });
    }
};
//TEM QUE TESTAR
exports.updateEstoque = async (req, res) => {
    //extrai os dados do body da requisicao
    const { id_itemestoque, id_bebida } = req.body;

    try {
        //Chama o metodo createEstoque do modelo
        const { data, error } = await modelEstoque.updateEstoque(id_itemestoque, id_bebida);
        //retorna a resposta com mensagem de sucesso e dados do estoque 
        if (data && data.length) {
            res.status(201).json({
                message: 'Estoque atualizado com sucesso!',data
            });
        } else {
            throw Error('Erro ao atualizar o estoque!')
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

    };
//TEM QUE TESTAR
exports.deleteEstoque = async (req, res) => {
    // Extrai o ID do estoque a ser excluído dos parâmetros da requisição
    const { id_estoque,id_bebida } = req.body;

    try {
        // Chama a função deleteEstoque para excluir o estoque
        const { data, error } = await modelEstoque.deleteEstoque(id_estoque,id_bebida);

        if (data && data.length) {
            res.status(201).json({
                message: 'Estoque excluido com sucesso!',data
            });
        } else {
            throw Error('Erro ao excluir o estoque!')
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

};