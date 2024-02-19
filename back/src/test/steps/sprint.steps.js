const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const {
  createSprint,
  getSprints,
  updateSprintData,
  deleteSprintData,
} = require("../../controllers/sprintController");

let createdSprint;

Given('the sprint data:', function (table) {
    // Convert Gherkin table to an object
    const sprintData = table.hashes()[0];
    // Store it for later use
    this.sprintData = sprintData;
});

When('the user creates a new sprint', async function () {
    // Call the createSprint function
    createdSprint = await createSprint(this.sprintData);
});

Then('the response should be a new sprint with sprintNumber {int}', function (sprintNumber) {
    // Check if the createdSprint has the expected sprintNumber
    expect(createdSprint.sprintNumber).to.equal(sprintNumber);
});

When('the user requests all sprints', async function () {
    // Call the getSprints function
    this.response = await getSprints();
});

Then('the response should contain a list of sprints', function () {
    // Check if the response is an array
    expect(this.response).to.be.an('array');
    // Additional assertions can be added based on your specific requirements
});

Given('there is an existing sprint with sprintNumber {int}', async function (sprintNumber) {
    // Create a sample sprint for testing
    await createSprint({
        sprintNumber,
        date: '2024-01-30T12:00:00Z',
        capacity: 10,
        velocity: 0,
        completed: 0,
        completion: 0,
        velocityCapacityAvg: 0,
    });
});

When('the user updates the sprint with sprintNumber {int}:', async function (sprintNumber, table) {
    // Convert Gherkin table to an object
    const updatedData = table.hashes()[0];
    // Call the updateSprintData function
    this.response = await updateSprintData(sprintNumber, updatedData);
});

Then('the response should indicate a successful update', function () {
    // Check if the response indicates a successful update
    expect(this.response.success).to.be.true;
    // Additional assertions can be added based on your specific requirements
});

When('the user deletes the sprint with sprintNumber {int}', async function (sprintNumber) {
    // Call the deleteSprintData function
    this.response = await deleteSprintData(sprintNumber);
});

Then('the response should indicate a successful deletion', function () {
    // Check if the response indicates a successful deletion
    expect(this.response.success).to.be.true;
});
