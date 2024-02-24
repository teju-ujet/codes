const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/third_party_api.routes');

const app = express();
const port = 8085;

app.use(bodyParser.json());
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
