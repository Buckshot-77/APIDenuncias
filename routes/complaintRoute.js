const router = require('express').Router();
const {
  createComplaint,
  deleteDB,
} = require('../controller/complaintController');

router.post('/', createComplaint);
router.delete('/', deleteDB);

module.exports = router;
