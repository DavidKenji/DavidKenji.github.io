<script>
        // Feather Icons
        feather.replace();

        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Particles.js Configuration
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                },
                "size": {
                    "value": 3,
                    "random": true,
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                }
            },
            "retina_detect": true
        });

        // GitHub API Fetch
        const githubUsernameInput = document.getElementById('github-username');
        const projectsContainer = document.getElementById('projects-container');
        const loader = document.getElementById('loader');

        const fetchGitHubProjects = async (username) => {
            loader.classList.remove('hidden');
            projectsContainer.innerHTML = '';
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
                if (!response.ok) {
                    throw new Error('User not found or API limit reached');
                }
                const repos = await response.json();
                
                repos.slice(0, 6).forEach(repo => {
                    const projectCard = `
                        <div class="glass-effect p-6 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 class="text-xl font-bold mb-2 text-white">${repo.name}</h3>
                            <p class="text-gray-400 mb-4 h-20 overflow-hidden">${repo.description || 'No description available.'}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-cyan-400">${repo.language || 'N/A'}</span>
                                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-cyan-400">
                                    <i data-feather="github"></i>
                                a>
                            </div>
                        </div>
                    `;
                    projectsContainer.innerHTML += projectCard;
                });
                feather.replace(); // Re-initialize icons
            } catch (error) {
                projectsContainer.innerHTML = `<p class="text-center text-red-500 col-span-full">${error.message}</p>`;
            } finally {
                loader.classList.add('hidden');
            }
        };

        githubUsernameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const username = e.target.value.trim();
                if (username) {
                    fetchGitHubProjects(username);
                }
            }
        });

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section-hidden').forEach(section => {
            observer.observe(section);
        });

    </script>