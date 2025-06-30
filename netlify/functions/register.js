const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

exports.handler = async (event) => {
  try {
    const { Tipo, Nome, Telefone } = JSON.parse(event.body);

    const { error } = await supabase
      .from('db-graduation')
      .insert([{ Tipo, Nome, Telefone }]);

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Erro ao registrar',
          supabaseError: error.message 
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Inscrição realizada com sucesso!' })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Erro interno no servidor',
        internalError: err.message 
      })
    };
  }
};
