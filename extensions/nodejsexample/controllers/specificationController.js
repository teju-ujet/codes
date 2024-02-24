const specificationService = require('../services/specificationService');

class SpecificationController {
  async getAllSpecifications(req, res) {
    try {
      const specifications = await specificationService.getAllSpecifications();
      res.json(specifications);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async addSpecification(req, res) {
    const { cpu, memory, storage } = req.body;
    
    try {
      await specificationService.addSpecification(cpu, memory, storage);
      res.status(201).json({ message: 'Specification added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateSpecification(req, res) {
    const { id } = req.params;
    const { cpu, memory, storage } = req.body;
    
    try {
      await specificationService.updateSpecification(id, cpu, memory, storage);
      res.status(200).json({ message: 'Specification updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteSpecification(req, res) {
    const { id } = req.params;
    
    try {
      
      await specificationService.deleteSpecification(id);
      res.status(200).json({ message: 'Specification deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

async addColumnToSpecificationTable(req, res) {
  const { columnName, columnType } = req.body;

  try {
      const columnDefinition = `${columnName} ${columnType}`;
      await specificationService.addColumnToSpecificationTable
      (columnDefinition);
      res.status(200).json({ message: 'Column added to Specification table' });
  } catch (error) {
      console.error('Error adding column:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
}
}


module.exports = new SpecificationController();
