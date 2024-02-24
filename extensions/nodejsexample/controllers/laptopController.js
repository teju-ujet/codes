const laptopService = require('../services/laptopService');

class LaptopController {
    async getAllLaptops(req, res) {
        try {
            const laptops = await laptopService.getAllLaptops();
            res.json(laptops);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async addLaptop(req, res) {
        const { model } = req.body;

        try {
            await laptopService.createLaptop(model);
            res.status(200).json({ message: 'Laptop added successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async updateLaptop(req, res) {
        const { id } = req.params;
        const { model } = req.body;

        try {
            await laptopService.updateLaptop(id, model);
            res.status(200).json({ message: 'Laptop updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async deleteLaptop(req, res) {
        const { id } = req.params;

        try {
            await laptopService.deleteLaptop(id);
            res.status(200).json({ message: 'Laptop deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async addColumnToLaptopsTable(req, res) {
        console.log('req.body:', req.body); 
        
        const { columnName, columnType } = req.body;
    
        try {
            const columnDefinition = `${columnName} ${columnType}`;
            await laptopService.addColumn(columnDefinition);
            res.status(200).json({ message: 'Column added to laptops table' });
        } catch (error) {
            console.error('Error adding column:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}        

module.exports = new LaptopController();
