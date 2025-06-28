import "./Project.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "BuzzBox",
    type: "Gmail like web app",
    description:
      "A Gmail-inspired app with real-time item communication and Firebase Auth.",
    tech: ["React", "Firebase", "Redux", "Tailwind", "Framer-Motion"],
    links: {
      demo: "https://buzzbox-dfe5f.web.app/login",
      code: "https://github.com/yourusername/buzzbox",
    },
  },
   {
    title: "Movie-Search",
    type: "Seach movie like Netflix",
    description:
      "Discover movies, filter by genre or year, scroll for more, and save your ratings with smooth animations and responsive design.",
    tech: ["Next.js", "TypeScript", "Redux", "Tailwind", "Framer-Motion","ShadeCN UI"],
    links: {
      demo: "https://movie-search-gray-xi.vercel.app/movies",
      code: "https://github.com/Deepak-kumar4/Movie-Search",
    },
  },
  {
    title: "NewsNex",
    type: "News Application",
    description:
      "A sleek, category-based news app using NewsAPI. Includes infinite scroll and responsive UI for mobile and desktop.",
    tech: ["React", "NewsAPI", "Axios", "CSS"],
    links: {
      demo: "https://newsnexdpk.netlify.app/",
      code: "https://github.com/yourusername/newsnex",
    },
  },
];

export default function Projects() {
  return (
    <motion.section
      className="projects-container"
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        My Projects
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Explore a selection of my best real-world applications
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2 }}
            viewport={{ once: true }}
          >
            <span className="project-type">{project.type}</span>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
              {project.links.code && (
                <a href={project.links.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="projects-footer"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p>See more on my GitHub</p>
        <a
          className="btn primary"
          target="_blank"
          href="https://github.com/Deepak-kumar4"
          rel="noreferrer"
        >
          View GitHub Profile
        </a>
      </motion.div>
    </motion.section>
  );
}




