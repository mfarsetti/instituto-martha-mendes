import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const TimelineItem = ({ year, title, description, icon: Icon, index }: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    index % 2 === 0 ? [-100, 0, 0, -100] : [100, 0, 0, 100]
  );

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, x }}
      className={`flex items-center gap-8 mb-24 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-background via-background to-primary/5 border border-primary/20 rounded-2xl p-8 shadow-elegant backdrop-blur-sm"
        >
          <div className={`inline-flex items-center gap-2 mb-4 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary font-heading">{year}</span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </motion.div>
      </div>

      {/* Timeline Line with Dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          whileInView={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
          className="w-6 h-6 rounded-full bg-gradient-gold border-4 border-background shadow-glow z-10"
        />
      </div>

      {/* Spacer for the other side */}
      <div className="flex-1" />
    </motion.div>
  );
};

export default TimelineItem;
