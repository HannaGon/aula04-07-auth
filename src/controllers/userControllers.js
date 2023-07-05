const UserSchema = require('../models/userSchema')
//puxa o schema (template para bd) para usuários
const bcrypt = require("bcrypt");
//inicia o bcrypt para criptografar senhas

const exibeUsers = async (req, res) => {
  //função que exibe todos os dados de usuários cadastrados
  //este tipo de função não é padrão, apenas para ilustração
  try {
    const todosUsers = await UserSchema.find()
    /*enche a variavel com o conteúdo de um find( )
    um find vazio no mongo retorna todos os resultados*/
    res.status(200).json(todosUsers)
    //exibe todos os resultados no bd de users
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }//se der erro, retorna mensagem
}

const createUser = async (req, res) => {
  //função para criar usuário
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  /*pega a senha digitada no body, e usa a função do bcrypt
  hashSync para converter em uma string hasheada*/
  req.body.password = hashedPassword
  //devolve a senha hasheada para a variável senha do body

  const emailExists = await UserSchema.exists({ email: req.body.email })
  //checa se o email no body já existe no banco
  if (emailExists) {
    return res.status(409).send({
      message: 'Conflito: Email já cadastrado',
    })//se existe: erro, email já cadastrado
  }
  //se não existe, segue para o try
  try {
    const newUser = new UserSchema(req.body)
    /*cria novo user usando o userschema como model
    e a senha hasheada já atualizada no body*/
    const savedUser = await newUser.save()
    //salva o novo usuário no banco
    res.status(201).send({
      message: 'Usuário criado com sucesso',
      savedUser,
    })//resposta para feedback e executa o save
  } catch (err) {
    console.error(err)
    res.status(500).send({
      message: err.message,
    })//se der erro, exibe mensagem
  }
}

module.exports = {
    exibeUsers,
    createUser
}
//exporta as funções de usuário que criamos