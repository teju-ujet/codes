app.get('/thirdapi', async (req, res) => {
    try {
      const apiResponse = await axios.get('https://api.publicapis.org/entries');
  
      // Process the API response here as needed
      const responseData = apiResponse.data;
      
      // Extract relevant information from the API response
      const entries = responseData.entries.map(entry => ({
        title: entry.API,
        description: entry.Description,
        category: entry.Category,
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
  //   try {
//     const apiResponse = await axios.get('https://api.publicapis.org/entries');
//     const entries = apiResponse.data.entries.map(entry => new APIEntry(entry.API, entry.Description));
//     return entries;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch API entries.');
//   }
// }