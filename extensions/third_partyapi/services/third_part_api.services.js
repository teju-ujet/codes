const axios = require('axios');
const APIEntry = require('../models/third_party_api.model');
const uri="https://api.publicapis.org/entries";
async function fetchAPIEntries() {
  try {
    const apiResponse = await axios.get(this.uri, {
      responseType: 'json', 
    });

    const responseData = apiResponse.data;

    if (!responseData || !Array.isArray(responseData.entries)) {
      throw new Error('Invalid API response or structure');
    }

    const entries = responseData.entries.map(entry => new APIEntry(entry.API, entry.Description, entry.Category,entry.Link));

    return entries;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch API entries.');
  }
}

async function createAPIEntry(data) {
  try {
    const apiResponse = await axios.post(this.uri, data, {
      responseType: 'json', 
    });

    return apiResponse.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create API entry.');
  }
}

async function updateAPIEntry(id, data) {
  try {
    const apiResponse = await axios.put(`https://api.publicapis.org/entries/${id}`, data, {
      responseType: 'json',
    });

    return apiResponse.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update API entry.');
  }
}

async function deleteAPIEntry(id) {
  try {
    const apiResponse = await axios.delete(`https://api.publicapis.org/entries/${id}`, {
      responseType: 'json', 
    });

    return apiResponse.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete API entry.');
  }
}

module.exports = {
  fetchAPIEntries,
  createAPIEntry,
  updateAPIEntry,
  deleteAPIEntry,
};