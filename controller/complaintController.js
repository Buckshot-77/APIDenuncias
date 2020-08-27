const Complaint = require('../model/complaintModel');
const axios = require('axios');

const apiKey = process.env.API_KEY;

exports.createComplaint = async (req, res) => {
  try {
    let requestObject = req.body;
    const latitude = requestObject.latitude;
    const longitude = requestObject.longitude;
    const results = await axios.get(
      `http://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${latitude},${longitude}&includeRoadMetadata=true&includeNearestIntersection=true`
    );

    const locationResults = results.data.results['0'].locations[0];

    requestObject.endereco = {
      logradouro: locationResults.street,
      bairro: locationResults.adminArea6,
      cidade: locationResults.adminArea5,
      estado: locationResults.adminArea3,
      pais: locationResults.adminArea1,
      cep: locationResults.postalCode,
    };

    if (locationResults.length === 0) {
      throw new Error('Endereço não encontrado para essa localidade.');
    }

    const newComplaint = await Complaint.create(requestObject);

    res.status(201).json({
      status: 'success',
      data: newComplaint,
    });
  } catch (err) {
    res.status(404).json({
      error: { code: '1', message: err.message },
    });
  }
};

exports.deleteDB = async (req, res) => {
  try {
    await Complaint.deleteMany({});
    res.status(204).json({
      status: 'success',
      data: 'null',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
