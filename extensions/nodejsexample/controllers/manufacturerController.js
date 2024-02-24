const manufacturerService = require('../services/manufacturerService');

class ManufacturerController {
  async getAllManufacturers(req, res) {
    try {
      const manufacturers = await manufacturerService.getAllManufacturers();
      res.json(manufacturers);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async addManufacturer(req, res) {
    const { name } = req.body;
    
    try {
      await manufacturerService.createManufacturer(name);
      res.status(200).json({ message: 'Manufacturer added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateManufacturer(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    
    try {
      await manufacturerService.updateManufacturer(id, name);
      res.status(200).json({ message: 'Manufacturer updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteManufacturer(req, res) {
    const { id } = req.params;
    
    try {
      await manufacturerService.deleteManufacturer(id);
      res.status(200).json({ message: 'Manufacturer deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async addColumnToManufacturer(req, res) {
    const { columnName, columnType } = req.body;

    try {
        const columnDefinition = `${columnName} ${columnType}`;
        await manufacturerService.addColumnToManufacturerTable(columnDefinition);
        res.status(200).json({ message: 'Column added to manufacturer table' });
    } catch (error) {
        console.error('Error adding column:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
}

module.exports = new ManufacturerController();
