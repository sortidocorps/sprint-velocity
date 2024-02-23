// controllers/sprintController.js
const { addSprint, updateSprint, deleteSprint } = require("../models/lowdb.js");

const createSprint = async (sprintData) => {
    try {
        // Assuming sprintData is an object containing necessary sprint information
        addSprint(sprintData);
        return sprintData;
    } catch (error) {
        throw error;
    }
};

const getSprints = async () => {
    try {
        const sprints = await Sprint.find();
        return sprints;
    } catch (error) {
        throw error;
    }
};

// Similar controller logic for updating and deleting sprints
const updateSprintData = async (sprintNumber, updatedData) => {
    try {
        // Assuming updatedData is an object with fields to update
        updateSprint(sprintNumber, updatedData);
        return { success: true, message: 'Sprint updated successfully.' };
    } catch (error) {
        throw error;
    }
};

const deleteSprintData = async (sprintNumber) => {
    try {
        deleteSprint(sprintNumber);
        return { success: true, message: 'Sprint deleted successfully.' };
    } catch (error) {
        throw error;
    }
};

module.export = { createSprint, getSprints, updateSprintData, deleteSprintData };
