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
        const estoqueUp = await modelEstoque.updateEstoque(id_itemestoque, id_bebida);

        //retorna a resposta com mensagem de sucesso e dados do estoque 
        res.status(201).json({
            message: 'Estoque atualizada com sucesso!', estoque
        });
    } catch (error) {
        //em caso de erro, retorna a mensagem de erro
        console.error(error);
        res.status(500).json(
            { message: 'Erro ao atualizar estoque!' });

    }
};
//TEM QUE TESTAR
exports.deleteEstoque = async (req, res) => {
    // Extrai o ID do estoque a ser excluído dos parâmetros da requisição
    const { id_estoque } = req.body;

    try {
        // Chama a função deleteEstoque para excluir o estoque
        const deleteResult = await deleteEstoque(id_estoque);

        if (deleteResult) {
            // Retorna a resposta com mensagem de sucesso
            res.status(200).json({
                message: 'Estoque excluído com sucesso!'
            });
        } else {
            // Retorna a resposta com mensagem de erro
            res.status(404).json({
                message: 'Estoque não encontrado!'
            });
        }
    } catch (error) {
        // Em caso de erro, retorna a mensagem de erro
        console.error(error);
        res.status(500).json({
            message: 'Erro ao excluir estoque!'
        });
    }
};