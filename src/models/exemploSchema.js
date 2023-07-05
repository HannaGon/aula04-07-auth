const mongoose = require('mongoose');
//puxa mongoose

const exemploSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    //cria novo schema para cadastro de produtos
    nome: {
        type: String,
        required: true
    },//tipo da variavel esperada e se é obrigatório
    tipo: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('produto', exemploSchema);
//exporta schema como model