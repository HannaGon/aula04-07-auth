const mongoose = require('mongoose');
//puxa mongoose

const userSchema = new mongoose.Schema({
    //cria novo schema para cadastro de usuários
    id: mongoose.Schema.Types.ObjectId,
    //novo id do mongoose
    nome: {
        type: String,
        required: true
        //tipo da variavel esperada e se é obrigatório
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }//registra quando o cadastro foi feito
});

module.exports = mongoose.model('user', userSchema);
//exporta o schema como model