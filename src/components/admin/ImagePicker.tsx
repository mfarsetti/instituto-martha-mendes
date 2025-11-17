import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image } from "lucide-react";

interface ImagePickerProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export function ImagePicker({ value, onChange, label }: ImagePickerProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://exemplo.com/imagem.jpg"
      />
      {value && (
        <div className="mt-4 rounded-lg overflow-hidden border border-border">
          <img
            src={value}
            alt="Preview"
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop";
            }}
          />
        </div>
      )}
      {!value && (
        <div className="mt-4 rounded-lg border-2 border-dashed border-border h-48 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <Image className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Insira uma URL de imagem para ver o preview</p>
          </div>
        </div>
      )}
    </div>
  );
}
