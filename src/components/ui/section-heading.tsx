import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, centered = false, className }: SectionHeadingProps) => {
  return (
    <div className={cn("space-y-2", centered && "text-center", className)}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl text-muted-foreground max-w-2xl",
          centered && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
