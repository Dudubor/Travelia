const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    permissoesCrud: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }


});

const corretorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },  
    telefone: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    creci: {
        type: String,
        required: true
    },
    permissoesCrud: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


const documentoSchema = new mongoose.Schema({
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tbl_usuario',
        required: true
    },
    doc_id: {
        type: String,
        required: true
    },
    nome_documento: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});



const User = mongoose.model('tbl_usuario', userSchema);
const Corretor = mongoose.model('tbl_corretor', corretorSchema);
const Documento = mongoose.model('tbl_documento', documentoSchema);
module.exports = { User, Corretor, Documento };