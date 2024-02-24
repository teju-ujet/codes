const { insertQuery, selectQuery, updateQuery, deleteQuery, addColumn } = require('../datasource/query'); // Make sure to import the correct function

const createSpecification = async (cpu, memory, storage) => {
    return insertQuery('specifications', { cpu, memory, storage });
};

const getAllSpecifications = async () => {
    return selectQuery('*', 'specifications');
};

const updateSpecification = async (id, cpu, memory, storage) => {
    const conditions = `id = ${id}`;
    const data = { cpu, memory, storage };
    return updateQuery('specifications', data, conditions);
};

const deleteSpecification = async (id) => {
    const conditions = `id = ${id}`;
    return deleteQuery('specifications', conditions);
};

const addColumnToSpecificationTable = async (columnDefinition) => {
    try {
        await addColumn('specifications', columnDefinition); // Call the correct function
        console.log('Column added successfully');
    } catch (error) {
        console.error('Error adding column:', error);
        throw error;
    }
};

module.exports = {
    createSpecification,
    getAllSpecifications,
    updateSpecification,
    deleteSpecification,
    addColumnToSpecificationTable,
};

