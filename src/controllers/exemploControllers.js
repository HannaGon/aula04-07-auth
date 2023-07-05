const mongoose = require("mongoose")
//puxa o mongoose
const exemploSchema = require("../models/exemploSchema")
//puxa o schema (template) para o bd dos produtos

const exibeTodos = async(req,res)=>{
    //função que exibe todos os produtos cadastrados
    let query = { }
    //criamos uma variável vazia
    try {
        const todosResultados= await exemploSchema.find(query)
        //find da variável vazia retorna todo o banco no mongoDB
        res.status(200).json(todosResultados)
        //exibe todo o banco
    } catch (error) {
        res.status(500).json({
            message: error.message
        })//se erro: exibe mensagem
    }
}

const cadastraProduto = async(req,res)=>{
    //função para cadastrar produto
    try {
        const { nome, tipo, preco } = req.body
        //pega dados do produto do body
        const novoProduto = new exemploSchema({
            nome: nome,
            tipo: tipo,
            preco: preco
        })
        /*cria nova entrada no banco com os dados
        do body e usando o schema como modelo*/
        const salvaProduto = await novoProduto.save()
        //salva novo produto no banco
        res.status(201).json({
            boletim: salvaProduto
        })//retorna feedback e salva
    } catch (error) {
        res.status(400).json({
            message:error.message
        })//se erro: exibir mensagem
    }
}

const deletaProduto = async(req,res)=>{
    //função para deletar produto do banco
    try {
        const resultadoBusca = await exemploSchema.findById(req.params.id)
        //encontra o produto pelo id informado
        await resultadoBusca.deleteOne()
        //quando acha, deleta apenas aquele produto
        res.status(200).json({
            message: "Produto Deletado"
        })//feedback informando que foi executado
    } catch (error) {
        res.status(400).json({
            message: error.message
        })//se erro: exibir mensagem
    }
}

module.exports={
    exibeTodos,
    cadastraProduto,
    deletaProduto
}
//exporta as funções que criamos