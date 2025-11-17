import { motion } from "framer-motion";

interface Particle {
  id: number;
  size: number;
  x: number;
  duration: number;
  delay: number;
}

const FloatingParticles = () => {
  const particles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            bottom: "-10%",
          }}
          animate={{
            y: [0, -1200],
            opacity: [0, 0.6, 0.8, 0.6, 0],
            scale: [0, 1, 1, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
