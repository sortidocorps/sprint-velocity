// models/lowdb.js
import { JSONFilePreset } from 'lowdb/node';

const defaultData = { sprints: [], teammates: [] };
const db = JSONFilePreset('db.json', defaultData);

// Method to add a new sprint
const addSprint = (sprintData) => {
    db.update(({ sprints }) => sprints.push(sprintData)).write();
};

// Method to update a sprint by sprint number
const updateSprint = (sprintNumber, updatedData) => {
    db.get('sprints')
        .find({ sprintNumber })
        .assign(updatedData)
        .write();
};

// Method to delete a sprint by sprint number
const deleteSprint = (sprintNumber) => {
    db.get('sprints').remove({ sprintNumber }).write();
};

// Export the db instance and methods
export { db, addSprint, updateSprint, deleteSprint };
