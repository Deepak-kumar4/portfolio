import "./Education.css";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      className="education-section"
      id="education"
      initial={{ opacity: 0, y: 40 }}
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
        Education
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        My academic journey and achievements
      </motion.p>

      <div className="education-timeline">
        {[ 
          {
            school: "National Institute of Technology, Tiruchirappalli",
            degree: "Bachelor of Technology",
            detail: "CGPA: 7.47 / 10",
            year: "2020 – 2024"
          },
          {
            school: "Gaya College, Gaya",
            degree: "Intermediate (12th)",
            detail: "Percentage: 84.60%",
            year: "2017 – 2019"
          },
          {
            school: "T. Model Inter School, Gaya",
            degree: "Matriculation (10th)",
            detail: "Percentage: 84.20%",
            year: "2016 – 2017"
          }
        ].map((edu, i) => (
          <motion.div
            className="education-item"
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{edu.school}</h3>
            <span className="education-degree">{edu.degree}</span>
            <p className="education-details">{edu.detail}</p>
            <p className="education-year">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

