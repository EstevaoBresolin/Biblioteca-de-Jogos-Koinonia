import React from "react";
import { motion } from "framer-motion";
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-8">
      {/* Background Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-outfit leading-tight mb-6">
              Descubra Jogos, <br />
              <span className="relative inline-block">
                Construa Comunhão
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-mint"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00025 6.99997C25.7509 2.83331 83.2511 -3.00003 198.002 4.99996"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-inter">
              Junte-se à Koinonia para encontrar sua próxima mesa, descobrir
              novos jogos de tabuleiro e conectar-se com jogadores apaixonados.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="bg-mint text-navy px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-mint/20 hover:shadow-mint/40 transition-shadow duration-300"
            >
              Explorar Jogos
            </motion.button>
          </motion.div>

          {/* Animated Illustration */}
          <div className="relative h-[400px] w-full flex items-center justify-center">
            {/* Abstract Board Game Elements */}
            <motion.svg
              viewBox="0 0 400 400"
              className="w-full h-full max-w-md mx-auto"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              {/* Floating Hexagon (Catan-style) */}
              <motion.path
                d="M200 50 L243.3 75 L243.3 125 L200 150 L156.7 125 L156.7 75 Z"
                fill="none"
                stroke="#3ED598"
                strokeWidth="2"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating Card */}
              <motion.rect
                x="260"
                y="100"
                width="60"
                height="90"
                rx="4"
                fill="#252540"
                stroke="#A0A0C0"
                strokeWidth="2"
                animate={{
                  y: [0, 20, 0],
                  rotate: [15, 10, 15],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Floating Meeple/Pawn */}
              <motion.path
                d="M100 250 C100 230 120 230 120 250 C120 270 140 280 140 300 L80 300 C80 280 100 270 100 250 Z"
                fill="#F5C842"
                opacity="0.8"
                animate={{
                  y: [0, -25, 0],
                  rotate: [-10, 0, -10],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Floating Dice */}
              <motion.rect
                x="280"
                y="250"
                width="50"
                height="50"
                rx="8"
                fill="none"
                stroke="#3ED598"
                strokeWidth="2"
                animate={{
                  y: [0, 15, 0],
                  rotate: [45, 90, 45],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />

              <motion.circle
                cx="295"
                cy="265"
                r="3"
                fill="#3ED598"
                animate={{
                  y: [0, 15, 0],
                  rotate: [45, 90, 45],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />

              <motion.circle
                cx="315"
                cy="285"
                r="3"
                fill="#3ED598"
                animate={{
                  y: [0, 15, 0],
                  rotate: [45, 90, 45],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />

              {/* Connecting Lines */}
              <motion.path
                d="M180 120 L260 145"
                stroke="#A0A0C0"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.3"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              <motion.path
                d="M120 250 L280 275"
                stroke="#A0A0C0"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.3"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
}
