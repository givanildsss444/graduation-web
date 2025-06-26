const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

exports.handler = async (event) => {
  try {
    const { type, name, phone } = JSON.parse(event.body);

    const { error } = await supabase
      .from('inscricoes')
      .insert([{ type, name, phone }]);

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Erro ao registrar', error: error.message })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Inscrição realizada com sucesso!' })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro interno no servidor', error: err.message })
    };
  }
};
