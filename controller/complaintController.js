const Complaint = require('../model/complaintModel');
const GeoLocationService = require('../utils/GeoLocationService');
const Http = require('../utils/Http');

exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({});
    res.status(200).json({
      status: 'success',
      data: complaints,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createComplaint = async (req, res) => {
  try {
    const http = new Http();
    const geoLocationService = new GeoLocationService(http);
    let requestObject = req.body;
    const latitude = requestObject.latitude;
    const longitude = requestObject.longitude;
    const address = await geoLocationService.getAddress(latitude, longitude);

    requestObject.endereco = {
      logradouro: address.street,
      bairro: address.adminArea6,
      cidade: address.adminArea5,
      estado: address.adminArea3,
      pais: address.adminArea1,
      cep: address.postalCode,
    };

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
