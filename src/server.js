const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api', routes);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
  console.log('\x1b[36m', `-> http://localhost:${PORT}`, '\x1b[0m');
});
