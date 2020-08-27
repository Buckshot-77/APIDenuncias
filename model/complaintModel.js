const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  latitude: mongoose.Schema.Types.Number,
  longitude: mongoose.Schema.Types.Number,
  denunciante: {
    nome: mongoose.Schema.Types.Mixed,
    cpf: mongoose.Schema.Types.Mixed,
  },
  denuncia: {
    titulo: mongoose.Schema.Types.Mixed,
    descricao: mongoose.Schema.Types.Mixed,
  },
  locations: [
    {
      street: mongoose.Schema.Types.Mixed,
      adminArea6: mongoose.Schema.Types.Mixed,
      adminArea6Type: mongoose.Schema.Types.Mixed,
      adminArea5: mongoose.Schema.Types.Mixed,
      adminArea5Type: mongoose.Schema.Types.Mixed,
      adminArea4: mongoose.Schema.Types.Mixed,
      adminArea4Type: mongoose.Schema.Types.Mixed,
      adminArea3: mongoose.Schema.Types.Mixed,
      adminArea3Type: mongoose.Schema.Types.Mixed,
      adminArea1: mongoose.Schema.Types.Mixed,
      adminArea1Type: mongoose.Schema.Types.Mixed,
      postalCode: mongoose.Schema.Types.Mixed,
      geocodeQualityCode: mongoose.Schema.Types.Mixed,
      geocodeQuality: mongoose.Schema.Types.Mixed,
      dragPoint: mongoose.Schema.Types.Mixed,
      sideOfStreet: mongoose.Schema.Types.Mixed,
      linkId: mongoose.Schema.Types.Mixed,
      unknownInput: mongoose.Schema.Types.Mixed,
      type: mongoose.Schema.Types.Mixed,
      latLng: {
        lat: mongoose.Schema.Types.Mixed,
        lng: mongoose.Schema.Types.Mixed,
      },
      displayLatLng: {
        lat: mongoose.Schema.Types.Mixed,
        lng: mongoose.Schema.Types.Mixed,
      },
      mapUrl: mongoose.Schema.Types.Mixed,
      nearestIntersection: null,
      roadMetadata: null,
    },
  ],
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
