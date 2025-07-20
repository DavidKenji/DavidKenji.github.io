// --- PROJECT DATA ---
// No changes needed here. This is the same array of project objects.
const myProjects = [
    {
        title: 'E-commerce Website',
        description: 'A full-stack online store with a shopping cart, product pages, and a checkout system.',
        imageUrl: 'https://via.placeholder.com/600x400/4285f4/ffffff?text=E-commerce',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'Weather Forecast App',
        description: 'A clean weather app that fetches data from a third-party API to display the 5-day forecast.',
        imageUrl: 'https://via.placeholder.com/600x400/34a853/ffffff?text=Weather+App',
        technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'Data Dashboard',
        description: 'A data visualization dashboard built with React and a charting library.',
        imageUrl: 'https://via.placeholder.com/600x400/ea4335/ffffff?text=Dashboard',
        technologies: ['React', 'Chart.js', 'API'],
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'Task Management Tool',
        description: 'A tool to organize tasks with a drag-and-drop interface, built with vanilla JavaScript.',
        imageUrl: 'https://via.placeholder.com/600x400/fbbc05/ffffff?text=Task+Manager',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveUrl: '#',
        codeUrl: '#'
    }
];

// --- DOM ELEMENTS ---
const projectsContainer = document.getElementById('projects-container');
const filtersContainer = document.getElementById('filters');


// --- RENDER PROJECTS ---
// A function to display projects on the page. It can be reused for filtering.
function renderProjects(projectsToRender) {
    projectsContainer.innerHTML = ''; // Clear existing projects
    let allProjectCardsHTML = '';
    projectsToRender.forEach(project => {
        allProjectCardsHTML += `
            <div class="project-card">
                <img src="${project.imageUrl}" alt="A screenshot of the ${project.title} project">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.liveUrl}" class="btn">Live Demo</a>
                        <a href="${project.codeUrl}" class="btn btn-secondary">View Code</a>
                    </div>
                </div>
            </div>
        `;
    });
    projectsContainer.innerHTML = allProjectCardsHTML;
}


// --- CREATE & MANAGE FILTERS ---
function setupFilters() {
    // 1. Get all unique technologies
    const allTechs = new Set();
    myProjects.forEach(project => {
        project.technologies.forEach(tech => allTechs.add(tech));
    });

    // 2. Create the "All" button
    let buttonsHTML = '<button class="filter-btn active" data-tech="all">All</button>';

    // 3. Create a button for each unique technology
    allTechs.forEach(tech => {
        buttonsHTML += `<button class="filter-btn" data-tech="${tech}">${tech}</button>`;
    });

    filtersContainer.innerHTML = buttonsHTML;

    // 4. Add click event listeners to the buttons
    const filterButtons = filtersContainer.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedTech = e.target.dataset.tech;

            // Update the active button style
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            // Filter and render the projects
            if (selectedTech === 'all') {
                renderProjects(myProjects); // Show all projects
            } else {
                const filteredProjects = myProjects.filter(project => 
                    project.technologies.includes(selectedTech)
                );
                renderProjects(filteredProjects); // Show only filtered projects
            }
        });
    });
}


// --- INITIALIZE THE PAGE ---
// This code runs when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(myProjects); // Display all projects initially
    setupFilters();             // Create the filter buttons
});