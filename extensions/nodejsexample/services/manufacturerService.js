const { insertQuery, selectQuery, updateQuery, deleteQuery, addColumnToTable  } = require('../datasource/query');

const createManufacturer = async (name) => {
    return insertQuery('manufacturers', { name });
};

const getAllManufacturers = async () => {
    return selectQuery('*', 'manufacturers');
};

const updateManufacturer = async (id, name) => {
    const conditions = `id = ${id}`;
    const data = { name };
    return updateQuery('manufacturers', data, conditions);
};

const deleteManufacturer = async (id) => {
    const conditions = `id = ${id}`;
    return deleteQuery('manufacturers', conditions);
};

const addColumnToManufacturerTable = async (columnDefinition) => {
    try {
        await addColumnToTable('manufacturers', columnDefinition); 
        console.log('Column added successfully');
    } catch (error) {
        console.error('Error adding column:', error);
        throw error;
    }
};

module.exports = {
    createManufacturer,
    getAllManufacturers,
    updateManufacturer,
    deleteManufacturer,
    addColumnToManufacturerTable,
};
