import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#FFFFF",
            },
          },
          fpsLimit: 30,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#070607",
            },
            links: {
              color: "#070607",
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default ParticleBackground;
