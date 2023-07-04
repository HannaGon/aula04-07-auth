const mongoose = require('mongoose');

const exemploSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
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