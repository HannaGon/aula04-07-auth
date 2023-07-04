const mongoose = require("mongoose")
const exemploSchema = require("../models/exemploSchema")

const exibeTodos = async(req,res)=>{
    let query = { }
    try {
        const todosResultados= await exemploSchema.find(query)
        res.status(200).json(todosResultados)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const cadastraProduto = async(req,res)=>{
    try {
        const { nome, tipo, preco } = req.body
        const novoProduto = new exemploSchema({
            nome: nome,
            tipo: tipo,
            preco: preco
        })
        const salvaProduto = await novoProduto.save()
        res.status(201).json({
            boletim: salvaProduto
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

const deletaProduto = async(req,res)=>{
    try {
        const resultadoBusca = await exemploSchema.findById(req.params.id)
        await resultadoBusca.deleteOne()
        res.status(200).json({
            message: "Produto Deletado"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports={
    exibeTodos,
    cadastraProduto,
    deletaProduto
}