// models/lowdb.js
// const { JSONFilePreset } = require("lowdb/node");

const JSONFilePreset = (...args) => import("lowdb/node").then(({ JSONFilePreset: preset }) => preset(...args));


const defaultData = { sprints: [], teammates: [] };
const db = JSONFilePreset('db.json', defaultData);

// Method to add a new sprint
const addSprint = async (sprintData) => {
    (await db).update(({ sprints }) => sprints.push(sprintData)).write();
};

// Method to update a sprint by sprint number
const updateSprint = async (sprintNumber, updatedData) => {
    (await db).get('sprints')
        .find({ sprintNumber })
        .assign(updatedData)
        .write();
};

// Method to delete a sprint by sprint number
const deleteSprint = async (sprintNumber) => {
    (await db).get('sprints').remove({ sprintNumber }).write();
};

// Export the db instance and methods
module.exports = { db, addSprint, updateSprint, deleteSprint };
