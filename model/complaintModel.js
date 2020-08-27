const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  denunciante: {
    nome: String,
    cpf: String,
  },
  denuncia: {
    titulo: String,
    descricao: String,
  },
  endereco: {
    logradouro: String,
    bairro: String,
    cidade: String,
    estado: String,
    pais: String,
    cep: String,
  },
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
