// app.js
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Import route handlers
import sprintRoutes from './src/routes/sprintRoutes.js';
// import teammateRoutes from './src/routes/teammateRoutes.js';

// Use JSON middleware
app.use(express.json());

// Use route handlers
app.use('/sprints', sprintRoutes);
// app.use('/teammates', teammateRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
