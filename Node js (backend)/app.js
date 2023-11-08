const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const projects = require('./data/projects.json');

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.get('/random-idea/:difficulty', (req, res) => {
  const paramsDifficulty = req.params.difficulty;
  
  let filteredProjects = projects;

    filteredProjects = projects.filter(project => project.difficulty === paramsDifficulty);
    if (filteredProjects.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredProjects.length);
      const randomProject = filteredProjects[randomIndex];
      return res.json(randomProject);
    }
  
  res.status(404).json({ error: 'No projects available for the specified difficulty' });
});


const port = process.env.PORT || 3301;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
