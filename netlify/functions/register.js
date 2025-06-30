const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

exports.handler = async (event) => {
  try {
    const { type, name, phone } = JSON.parse(event.body);

    const { error } = await supabase
      .from('bd-graduation') // CONFIRME O NOME EXATO DA TABELA
      .insert([{ type, name, phone }]);

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Erro ao registrar',
          supabaseError: error.message // 👈 vai mostrar o erro real agora!
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
        internalError: err.message // 👈 caso algo dê errado no parse ou supabase
      })
    };
  }
};
