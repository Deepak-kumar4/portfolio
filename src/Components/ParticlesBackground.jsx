import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#1f1c2c" }
        },
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          shape: {
            type: "star", // ⭐ Star shape
            options: {
              star: {
                sides: 5
              }
            }
          },
          opacity: {
            value: 0.8
          },
          size: {
            value: { min: 1, max: 4 }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outMode: "bounce"
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 100
          }
        }
      }}
    />
  );
}



