const { supabase } = require('../database');

exports.createBebida = async (nome_bebida, tipo_bebida, valor_bebida, imagem_bebida) => {
  const { data, error } = await supabase.from('Bebida').insert({ nome_bebida, tipo_bebida, valor_bebida, imagem_bebida }, { returning: 'minimal' });
  if (error) {
    console.log('Erro ao criar bebida:', error);
  }
  return { data, error };
};

exports.updateBebida = async (id_bebida, nome_bebida, tipo_bebida, valor_bebida, imagem_bebida) => {
  const { data, error } = await supabase.from('Bebida').update({ nome_bebida, tipo_bebida, valor_bebida, imagem_bebida }).eq('id_bebida', id_bebida);
  if (error) {
    console.log('Erro ao atualizar bebida:', error);
  }
  return { data, error };
};

exports.selectBebida = async (id_bebida) => {
  const { data: bebida, error } = await supabase
    .from('Bebida')
    .select('id_bebida, nome_bebida, tipo_bebida, valor_bebida, imagem_bebida')
    .eq('id_bebida', id_bebida);

  if (error) {
    console.log('Erro ao selecionar bebida:', error);
  }

  return { data: bebida, error };
};