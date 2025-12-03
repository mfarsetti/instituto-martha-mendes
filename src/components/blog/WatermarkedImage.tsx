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
      {/* Watermark overlay */}
      <div className="absolute bottom-4 right-4 opacity-70 pointer-events-none">
        <img 
          src={logoWhite} 
          alt="Instituto Martha Mendes" 
          className="h-10 md:h-12 drop-shadow-lg"
          draggable={false}
        />
      </div>
      {/* Transparent protection layer */}
      <div className="absolute inset-0 bg-transparent" />
    </div>
  );
};

export default WatermarkedImage;
