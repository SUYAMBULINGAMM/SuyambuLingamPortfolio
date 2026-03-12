<<<<<<< HEAD
import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          size: {
            value: 2.5,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.7,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: false, // change this to false
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1.5,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  );
}

=======
import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          size: {
            value: 2.5,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.7,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: false, // change this to false
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1.5,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  );
}

>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
export default Particle;