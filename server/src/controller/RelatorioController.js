const { supabase } = require('../database');
const modelRelatorio = require('../model/Relatorio');

exports.relatorioTotem = async (req, res) => {

    const {tipo, dataIni, dataFim} = req.body;
   const dataInicio = dataIni + ' 00:00:00';
   const dataFinal = dataFim + ' 23:59:59';

    try {
        if(tipo == 1){
            const { data, error } = await modelRelatorio.relatorioBebidas(dataInicio, dataFinal);
            if (data && data.length) {
                res.status(200).json({
                    valor: 1, data
                });
            } else {
                throw Error('Não encontrado dados!')
            }
        }
        else if(tipo == 2){
            const { data, error } = await modelRelatorio.relatorioReposicoes(dataInicio, dataFinal);
            if (data && data.length) {
                res.status(200).json({
                    valor:2, data
                });
            } else {
                throw Error('Não encontrado dados!')
            }
        }
        else if(tipo == 3){
            const { data, error } = await modelRelatorio.relatorioMaquinas(dataInicio, dataFinal);
            if (data && data.length) {
                res.status(200).json({
                    valor: 3, data
                });
            } else {
                throw Error('Não encontrado dados!')
            }
        }
        else if(tipo == 4){
            const { data, error } = await modelRelatorio.relatorioVenda(dataInicio, dataFinal);
            if (data && data.length) {
                res.status(200).json({
                    valor: 4, data
                });
            } else {
                throw Error('Não encontrado dados!')
            }
        }
        

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
  };