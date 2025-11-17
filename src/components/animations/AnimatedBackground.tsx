import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-amber-900 to-purple-800 animate-gradient-shift" />
      
      {/* Flowing Waves */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 800" preserveAspectRatio="none">
        <motion.path
          d="M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
          fill="url(#wave1)"
          animate={{
            d: [
              "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z",
              "M0,450 C320,550 420,350 720,450 C1020,550 1120,350 1440,450 L1440,800 L0,800 Z",
              "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C2A86E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6C4ED2" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(194,168,110,0.4) 0%, transparent 70%)",
          filter: "blur(40px)"
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(108,78,210,0.4) 0%, transparent 70%)",
          filter: "blur(40px)"
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(194,168,110,0.3) 0%, transparent 70%)",
          filter: "blur(50px)"
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Sparkles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
    </div>
  );
};

export default AnimatedBackground;
