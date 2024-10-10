const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the Rest API',
    version: '1.0.0',
  });
});

module.exports = router;
