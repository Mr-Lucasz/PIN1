const { supabase } = require('../database');


exports.createFuncionario = async (nome, email, password) => {
  const { funcionario, error } = await supabase.from('Funcionario').insert({ name: nome, email: email, password: password}, { returning: 'minimal' });
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  return  funcionario;
};

exports.updateFuncionario = async (id_funcionario, nome, email, password) => {
  const { funcionario, error } = await supabase.from('Funcionario').update({ name: nome, email: email, password: password}).eq('id_funcionario', id_funcionario)
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  return  funcionario;
};