
const apiService = require('../services/third_part_api.services');

async function getAPIEntries(req, res) {
  try {
    const entries = await apiService.fetchAPIEntries();
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch API entries.');
  }
}

async function createAPIEntry(req, res) {
  try {
    const data = req.body;
    const createdEntry = await apiService.createAPIEntry(data);
    res.json(createdEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to create API entry.');
  }
}

async function updateAPIEntry(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedEntry = await apiService.updateAPIEntry(id, data);
    res.json(updatedEntry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to update API entry.');
  }
}

async function deleteAPIEntry(req, res) {
  try {
    const id = req.params.id;
    await apiService.deleteAPIEntry(id);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to delete API entry.');
  }
}

module.exports = {
  getAPIEntries,
  createAPIEntry,
  updateAPIEntry,
  deleteAPIEntry,
};