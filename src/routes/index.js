const express = require('express');
const router = express.Router();
const userRouter = require('./userRoutes');

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the Rest API',
    version: '1.0.0',
  });
});

router.use('/users', userRouter);

module.exports = router;
