const fs = require('fs');
let index = fs.readFileSync('src/pages/index.astro', 'utf8');
const projects = fs.readFileSync('temp_projects.html', 'utf8');
index = index.replace('<a href="/projects" onclick="closeMobileMenu()">Projects</a>', '<a href="#projects" onclick="closeMobileMenu()">Projects</a>');
index = index.replace('<li><a href="/projects">Projects</a></li>', '<li><a href="#projects">Projects</a></li>');
index = index.replace('<a href="/projects" class="btn-primary">Open Workspace ↗</a>', '<a href="#projects" class="btn-primary">View My Projects</a>');
index = index.replace('<!-- SKILLS -->', projects + '\n\n\t\t<!-- SKILLS -->');
fs.writeFileSync('src/pages/index.astro', index);
console.log('Restored projects section.');
