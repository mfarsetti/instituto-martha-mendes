import { useMemo, useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

type Props = {
  label?: string;
  value: string;
  onChange: (next: string) => void;
};

export default function ImageUploadField({ label = "Imagem", value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);

  const previewUrl = useMemo(() => value?.trim() || "", [value]);

  const onPick = () => inputRef.current?.click();

  const onFile = async (file: File) => {
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: form,
        credentials: "include",
      });
      if (!res.ok) throw new Error("upload_failed");
      const data = (await res.json()) as { url: string };
      onChange(data.url);
      toast.success("Imagem enviada.");
    } catch {
      toast.error("Não foi possível enviar a imagem.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <Card className="border-2 shadow-soft overflow-hidden">
        {previewUrl ? (
          <div className="relative aspect-[16/9] bg-muted">
            <img src={previewUrl} alt="Preview" className="h-full w-full object-cover" />
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="absolute right-3 top-3 bg-background/80 backdrop-blur"
              onClick={() => onChange("")}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="p-6 text-sm text-muted-foreground">
            Nenhuma imagem selecionada. Envie um arquivo ou informe uma URL.
          </div>
        )}

        <div className="p-4 border-t flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline" onClick={onPick} disabled={uploading}>
              <Upload className="mr-2 h-4 w-4" />
              {uploading ? "Enviando..." : "Upload"}
            </Button>
            <input
              ref={inputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void onFile(f);
              }}
            />
            <div className="text-xs text-muted-foreground">
              PNG/JPG/WebP • até 5MB
            </div>
          </div>

          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="ou cole uma URL (https://...)"
          />
        </div>
      </Card>
    </div>
  );
}

