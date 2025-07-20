import ProjectCard from './ProjectCard';

// Your project data, similar to what we had before
const projectData = [
  {
    title: 'E-commerce Website',
    description: 'Full-stack online store with a shopping cart and checkout.',
    imageUrl: '/images/ecommerce.jpg', // Place images in the /public/images folder
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Weather Forecast App',
    description: 'Fetches data from an API to display the 5-day forecast.',
    imageUrl: '/images/weather-app.jpg',
    tags: ['JavaScript', 'API', 'CSS'],
  },
  // Add more projects here
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will make each child animate one after the other
    },
  },
};

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>My Work</h2>
      <div className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animate when the element is in view
        viewport={{ once: true }} // Only animate once
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}