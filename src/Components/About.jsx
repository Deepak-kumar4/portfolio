import "./About.css";
import profilePic from "../assets/Profile.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // ✅ Framer Motion

export default function About() {
  return (
    <motion.section
      className="about-container"
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        About Me
      </motion.h2>
      <motion.p className="section-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        Get to know me better
      </motion.p>

      <div className="about-flex">
        {/* 👈 Left side: Image */}
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img src={profilePic} alt="Deepak Kumar" className="about-image" />
        </motion.div>

        {/* 👉 Right side: Text content */}
        <motion.div
          className="about-info"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Deepak Kumar</h3>
          <p className="nationality">Indian</p>
          <p className="bio">
            I am a passionate software developer with extensive experience in programming,
            particularly in <strong>C++</strong>. My journey in software development is driven by
            practical projects and peer collaboration.
          </p>

          <div className="details">
            <p><strong>Location:</strong> Noida, Uttar Pradesh</p>
            <p><strong>Languages:</strong> English, Hindi</p>
          </div>

          <div className="about-skills">
            <h4>My Skills</h4>
            <ul>
              <li>JavaScript</li>
              <li>React, Redux Toolkit</li>
              <li>C++</li>
              <li>HTML, CSS, JavaScript, PHP</li>
              <li>MS Office, Excel</li>
              <li>Data Structures & Algorithms, OOPs</li>
              <li>MySQL, MongoDB</li>
              <li>Python</li>
            </ul>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-60}
              className="btn primary"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}





