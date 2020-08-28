const router = require('express').Router();
const {
  createComplaint,
  deleteDB,
  getComplaints,
} = require('../controller/complaintController');

router.get('/', getComplaints);
router.post('/', createComplaint);
router.delete('/', deleteDB);

module.exports = router;
