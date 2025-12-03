import { useState, useRef, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from "lucide-react";
import { toast } from "sonner";
import mammoth from "mammoth";
import { renderMarkdown, htmlToMarkdown } from "@/lib/markdown";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  minHeight?: string;
}

export function MarkdownEditor({ value, onChange, label, minHeight = "min-h-[400px]" }: MarkdownEditorProps) {
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePaste = useCallback((e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const html = e.clipboardData.getData('text/html');
    
    if (html && html.includes('<')) {
      e.preventDefault();
      const markdown = htmlToMarkdown(html);
      
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newValue = value.substring(0, start) + markdown + value.substring(end);
      
      onChange(newValue);
      toast.success("Texto formatado convertido para Markdown");
    }
  }, [value, onChange]);

  const handleDocxUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.docx')) {
      toast.error("Por favor, selecione um arquivo .docx");
      return;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      const markdown = htmlToMarkdown(result.value);
      
      onChange(value ? `${value}\n\n${markdown}` : markdown);
      toast.success("Documento Word importado com sucesso!");
      
      if (result.messages.length > 0) {
        console.log("Avisos da conversão:", result.messages);
      }
    } catch (error) {
      console.error("Erro ao converter documento:", error);
      toast.error("Erro ao importar documento");
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label>{label}</Label>
        <div className="flex gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleDocxUpload}
            accept=".docx"
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            <FileText className="w-4 h-4 mr-2" />
            Importar .docx
          </Button>
        </div>
      </div>
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "edit" | "preview")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="edit">Editar</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="edit" className="mt-2">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onPaste={handlePaste}
            placeholder="Escreva em Markdown ou cole texto do Word (será convertido automaticamente)..."
            className={minHeight}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Markdown: # Título, ## Subtítulo, **negrito**, *itálico*, - lista | Cole do Word para converter
          </p>
        </TabsContent>
        <TabsContent value="preview" className="mt-2">
          <div 
            className={`${minHeight} border rounded-md p-4 prose prose-sm max-w-none overflow-auto bg-background`}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
