// Make sure you have the Axios library installed
// $ npm install axios

const axios = require('axios');

async function getHospitalById(id) {
  try {
    const response = await axios.get(`http://localhost:3000/hospitals/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Usage example
const hospitalId = 123; // Replace with the actual hospital ID you want to retrieve
getHospitalById(hospitalId).then(hospital => {
  console.log(hospital);
});
