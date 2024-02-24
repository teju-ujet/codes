// const express = require('express');
// const bodyParser = require('body-parser');
// const apiRoutes = require('./routes/apiRoutes');

// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.use('/api', apiRoutes);

// // Start the server
// const PORT =  4001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
