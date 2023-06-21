const { supabase } = require('../database');
const modelRelatorio = require('../model/Relatorio');

exports.relatorioTotem = async (req, res) => {

    const {id_totem, dataIni, dataFim} = req.body;
   const dataInicio = dataIni + ' 00:00:00';
   const dataFinal = dataFim + ' 23:59:59';

    try {
        const { data, error } = await modelRelatorio.relatorioTotem(id_totem, dataInicio, dataFinal);

        if (data && data.length) {
            res.status(200).json({
                message: 'Encontrado!', data
            });
        } else {
            throw Error('Não encontrado dados!')
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
  };