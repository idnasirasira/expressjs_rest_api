const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Express server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
  console.log('\x1b[36m', `-> http://localhost:${PORT}`, '\x1b[0m');
});
