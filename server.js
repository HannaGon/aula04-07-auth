const app = require('./src/app');
//puxa app
const PORT = process.env.PORT;
//puxa porta do env

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
/*escuta a porta e exibe mensagem 
no console quando inicia*/