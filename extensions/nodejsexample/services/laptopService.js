const { insertQuery, updateQuery, deleteQuery, addColumnToTable, selectQuery } = require('../datasource/query');
const Laptop = require('../models/Laptop'); 

const getAllLaptops = async (req, res) => {
    try {
        const laptops = await selectQuery('%a', 'laptops', '1', []);

        // Using map to transform data into Laptop instances
        const laptopInstances = laptops.map(laptop => new Laptop(laptop.id, laptop.model));

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(laptopInstances);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createLaptop = async (req, res) => {
    try {
        const model = req.body.model;
        const query = 'INSERT INTO laptops (model) VALUES (?)';
        await insertQuery(query, [model]);
        res.status(200).json({ message: 'Laptop created successfully' });
    } catch (error) {
        console.error('Error creating laptop:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateLaptop = async (req, res) => {
    const id = req.params.id;
    const model = req.body.model;
    try {
        const query = 'UPDATE laptops SET model = ? WHERE id = ?';
        await updateQuery(query, [model, id]);
        res.status(200).json({ message: 'Laptop updated successfully' });
    } catch (error) {
        console.error('Error updating laptop:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteLaptop = async (req, res) => {
    const id = req.params.id;
    try {
        const query = 'DELETE FROM laptops WHERE id = ?';
        await deleteQuery(query, [id]);
        res.status(200).json({ message: 'Laptop deleted successfully' });
    } catch (error) {
        console.error('Error deleting laptop:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// const addColumn = async (columnName, columnType) => {
//     try {
//         const query = `ALTER TABLE laptops ADD COLUMN ${columnName} ${columnType}`;
//         await addColumnToTable(query);
//     } catch (error) {
//         throw error;
//     }
// };
const addColumn = async (columnDefinition) => {
    try {
        await addColumnToTable('manufacturers', columnDefinition); 
        console.log('Column added successfully');
    } catch (error) {
        console.error('Error adding column:', error);
        throw error;
    }
};

module.exports = {
    getAllLaptops,
    createLaptop,
    updateLaptop,
    deleteLaptop,
    addColumn,
};


// const { insertQuery, updateQuery, deleteQuery, addColumn } = require('../datasource/query');

// const getAllLaptops = async (req, res) => {
//     try {
//         const laptops = await selectQuery('SELECT * FROM laptops');
//         res.setHeader('Content-Type', 'application/json');
//         res.status(200).json(laptops);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// const createLaptop = async (req, res) => {
//     try {
//         const model = req.body.model; 
//         const query = `INSERT INTO laptops (model) VALUES (?)`;
//         await insertQuery(query, [model]);
//         res.status(200).json({ message: 'Laptop created successfully' });
//     } catch (error) {
//         console.error('Error creating laptop:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// const updateLaptop = async (req, res) => {
//     const id = req.params.id; // Assuming you're extracting the id from request parameters
//     const model = req.body.model; // Assuming you're sending the model in the request body
//     try {
//         const query = `UPDATE laptops SET model = ? WHERE id = ?`;
//         await updateQuery(query, [model, id]);
//         res.status(200).json({ message: 'Laptop updated successfully' });
//     } catch (error) {
//         console.error('Error updating laptop:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// const deleteLaptop = async (req, res) => {
//     const id = req.params.id; // Assuming you're extracting the id from request parameters
//     try {
//         const query = `DELETE FROM laptops WHERE id = ?`;
//         await deleteQuery(query, [id]);
//         res.status(200).json({ message: 'Laptop deleted successfully' });
//     } catch (error) {
//         console.error('Error deleting laptop:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// const addColumnToLaptopsTable = async (req, res) => {
//     const columnDefinition = req.body.columnDefinition; // Assuming you're sending the column definition in the request body
//     try {
//         const query = `ALTER TABLE laptops ADD COLUMN ${columnDefinition}`;
//         await addColumn(query);
//         res.status(200).json({ message: 'Column added to laptops table successfully' });
//     } catch (error) {
//         console.error('Error adding column:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// module.exports = {
//     getAllLaptops,
//     createLaptop,
//     updateLaptop,
//     deleteLaptop,
//     addColumnToLaptopsTable
// };

