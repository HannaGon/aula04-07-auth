const mongoose = require('mongoose')
//puxa mongoose

const connect = async () => {
    //criamos a função async para conexão do banco de dados
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            //conecta usando o link do mongo no nosso env
            useNewUrlParser: true,
            /*interpretador de strings do mongoDB,
            ajuda a interpretar strings incluindo
            o link de acesso*/
            //essa opção é padrão e recomendo manter assim
            useUnifiedTopology: true
            /*diz ao mongodb que pode ignorar métodos de
            conexão antigos e irrelevantes em prol das
            conexões mais atualizadas*/
            //essa opção é padrão e recomendo manter assim
        })
        console.log("Banco conectado")
        //se der tudo certo, exibe mensagem no console como feedback
    } catch (error) {
        console.error("Erro: ", error.message)
    }//se erro, exibe a mensagem
}

module.exports = {
    connect
}
//exporta a função de conexão que criamos aqui