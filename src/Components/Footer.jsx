import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import "./Footer.css";
import githubIcon from "../assets/github-logo.png";
import linkedinIcon from "../assets/linkedin-icon.svg";
import leetcodeIcon from "../assets/leetcode-icon.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="footer-grid" variants={containerVariants}>
        {/* About */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>About Me</h3>
          <p>
            I'm Deepak Kumar, a passionate web developer focused on building
            clean, interactive, and user-friendly interfaces with React.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Contact</h3>
          <p>Email: deepakobc933@gmail.com</p>
          <p>Phone: +918083836118</p>
          <p>Location: Gaya, Bihar, India</p>
        </motion.div>

        {/* Social */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Follow Me</h3>
          <div className="footer-icons">
            {[githubIcon, linkedinIcon, leetcodeIcon].map((icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                href={
                  i === 0
                    ? "https://github.com/Deepak-kumar4"
                    : i === 1
                    ? "https://www.linkedin.com/in/deepak-kumar-9d9/"
                    : "https://leetcode.com/u/Deepak-Kmr/"
                }
                target="_blank"
                rel="noreferrer"
              >
                <img src={icon} alt="icon" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="footer-bottom" variants={itemVariants}>
        <p>© {currentYear} Deepak Kumar</p>
        <motion.button
          className="scroll-top-btn"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={18} />
          <span>Top</span>
        </motion.button>
      </motion.div>
    </motion.footer>
  );
}


