import "./Home.css";
import { ReactTyped } from "react-typed";
import coderImg from "../assets/coder.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall"; // ⬅️ Add this

export default function Home() {
  return (
    <motion.section
      className="home-container"
      id="home"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Snowfall Effect */}
      <Snowfall
        color="#cceeff"
        snowflakeCount={100}
        radius={[2, 5]}
        speed={[1, 2]}
        wind={[-1, 1]}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Main Content Wrapper */}
      <div className="home-content-wrapper">
        {/* Left Side Content */}
        <motion.div
          className="home-left"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="hello">Hello, my name is</p>
          <h1 className="name">Deepak Kumar</h1>
          <h2 className="role">
            <ReactTyped
              strings={["Software Engineer", "React Enthusiast", "Problem Solver"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h2>
          <p className="description">
            Building modern web experiences with <span>JavaScript</span>, <span>React</span>,
            and cutting-edge technologies. Let's bring your ideas to life.
          </p>
          <div className="home-buttons">
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-60}
              className="btn primary"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-60}
              className="btn primary"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="home-right"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={coderImg} alt="Coder" className="coder-img" />
        </motion.div>
      </div>
    </motion.section>
  );
}





