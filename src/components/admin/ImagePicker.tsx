import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Image, Upload } from "lucide-react";
import { toast } from "sonner";

interface ImagePickerProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

export function ImagePicker({ value, onChange, label }: ImagePickerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error("Por favor, selecione uma imagem válida");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error("Imagem muito grande. Máximo 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      onChange(base64);
      toast.success("Imagem carregada com sucesso!");
    };
    reader.onerror = () => {
      toast.error("Erro ao carregar imagem");
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      
      <div className="flex gap-2">
        <Input
          type="url"
          value={value.startsWith('data:') ? '' : value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="URL da imagem ou faça upload"
          className="flex-1"
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-4 h-4" />
        </Button>
      </div>

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
          {value.startsWith('data:') && (
            <p className="text-xs text-muted-foreground p-2 bg-muted">
              Imagem em Base64 ({Math.round(value.length / 1024)}KB)
            </p>
          )}
        </div>
      )}
      {!value && (
        <div 
          className="mt-4 rounded-lg border-2 border-dashed border-border h-48 flex items-center justify-center text-muted-foreground cursor-pointer hover:border-primary/50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="text-center">
            <Image className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Clique para fazer upload ou insira uma URL</p>
          </div>
        </div>
      )}
    </div>
  );
}
