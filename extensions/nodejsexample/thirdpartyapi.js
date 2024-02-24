const express = require('express');
const axios = require('axios');

const app = express();
const port = 8000; 

app.get('/thirdapi', async (req, res) => {
  try {
    const apiResponse = await axios.get('https://api.publicapis.org/entries');
    const responseData = apiResponse.data;
    
    // Extract relevant information from the API response
    const entries = responseData.entries.map(entry => ({
      title: entry.API,
      description: entry.Description,
      category: entry.Category,
      link:entry.Link,
    }));

    res.json(entries);
  } catch (error) {
    console.error(error);
    console.error(error.response ? error.response.data : 'No response data');
    res.status(500).send('Failed to process the request.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
