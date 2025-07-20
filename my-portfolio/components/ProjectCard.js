import { motion } from 'framer-motion';

// Define the animation for each card
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      className="project-card"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }} // Animate on hover!
    >
      <img src={project.imageUrl} alt={`Screenshot of ${project.title}`} />
      <div className="card-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}