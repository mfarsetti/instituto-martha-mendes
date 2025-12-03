import logoWhite from "@/assets/logo-white.svg";

interface WatermarkedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const WatermarkedImage = ({ src, alt, className = "" }: WatermarkedImageProps) => {
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover pointer-events-none select-none"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      />
      {/* Watermark overlay with high contrast background */}
      <div className="absolute bottom-4 right-4 pointer-events-none">
        <div className="bg-white/90 rounded-lg px-4 py-2 shadow-lg border border-white/50">
          <img 
            src={logoWhite} 
            alt="Instituto Martha Mendes" 
            className="h-8 md:h-10 invert"
            draggable={false}
          />
        </div>
      </div>
      {/* Transparent protection layer */}
      <div className="absolute inset-0 bg-transparent" />
    </div>
  );
};

export default WatermarkedImage;
