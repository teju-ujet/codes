const express = require('express');
const router = express.Router();
const laptopController = require('../controllers/laptopController');
const manufacturerController = require('../controllers/manufacturerController');
const specificationController = require('../controllers/specificationController');

router.get('/laptops', laptopController.getAllLaptops);
router.post('/laptops', laptopController.addLaptop);
router.post('/laptops/alter', laptopController.addColumnToLaptopsTable);
router.put('/laptops/:id', laptopController.updateLaptop);
router.delete('/laptops/:id', laptopController.deleteLaptop);


router.get('/manufacturers', manufacturerController.getAllManufacturers);
router.post('/manufacturers', manufacturerController.addManufacturer);
router.post('/manufacturers/alter',manufacturerController.addColumnToManufacturer);
router.put('/manufacturers/:id', manufacturerController.updateManufacturer);
router.delete('/manufacturers/:id', manufacturerController.deleteManufacturer);


router.get('/specifications', specificationController.getAllSpecifications);
router.post('/specifications', specificationController.addSpecification);
router.post('/specifications/alter', specificationController.addColumnToSpecificationTable);
router.put('/specifications/:id', specificationController.updateSpecification);
router.delete('/specifications/:id', specificationController.deleteSpecification);

module.exports = router;