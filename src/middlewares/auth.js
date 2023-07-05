const jwt = require('jsonwebtoken');
//puxa o jwt, que cria tokens de acesso
const SECRET = process.env.SECRET;
//puxa o secret do nosso .env

exports.checkAuth = (req, res, next) => {
    /*cria função de autorização já dentro 
    do exports, não é necessário exportar
    depois*/
    const authHeader = req.get('authorization');
    //checa no header se há autorização
    if (!authHeader) {
        return res.status(401).send({
            message: 'Sem autorizacao',
            statusCode: 401
        });/*sem o bearer token no header
        o sistema não permite acesso*/
    }
    
    const token = authHeader.split(' ')[1];
    /*pega o token completo do header(bearer tokentokentoken)
    e separa a string em uma array de vários elementos,
    separando cada um pelo espaço
    "bearer tokentoken" -> split(" ") -> [bearer, tokentoken]
    nosso token agora está no index 1 (o bearer é o 0)
    puxa apenas o token para a variável*/
    console.log("token:", token)
    //exibe o token no console (opcional)
    if (!token) {
        return res.status(401).send({
            message: "erro no token"
        })
    }//se não houver token, erro
    
    try {
        jwt.verify(token, SECRET, (err) => {
            if(err) {
                return res.status(401).send({
                    message: "Nao autorizado"
                })    
            }//se der erro na verificação, retorna o erro
            next();
            /*se estiver tudo ok, prossegue
            o Auth é uma cabine de pedágio do programa
            se estiver tudo ok (pago) ele libera a passagem
            para o destino (função), o next indica que
            tudo está ok e agora é hora de prosseguir para
            a rota em si*/
        })
    } catch(err) {
        console.error(err)
    }//exibe erro se for o caso
}