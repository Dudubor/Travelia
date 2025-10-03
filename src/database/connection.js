const mongoose = require('mongoose');
require('dotenv').config({path: 'variaveis.env'});

mongoose.connect(`mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.lgzoo.mongodb.net/${process.env.db_database}?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => {
    console.log(`Conexão estabelecida com o Banco de Dados ${process.env.db_database}`);
}).catch((err) => {
    console.log(`Erro ao conectar com o Banco de Dados ${process.env.db_database}`, err);
});

module.exports = {mongoose, db: mongoose.connection};
