// routes/sprintRoutes.js
const express = require("express");
const router = express.Router();
const {
  createSprint,
  getSprints,
} = require("../controllers/sprintController.js");

router.post('/', async (req, res) => {
    try {
        const sprint = await createSprint(req.body);
        res.status(201).send(sprint);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const sprints = await getSprints();
        res.send(sprints);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Similar route handling for teammates

module.exports = router;
