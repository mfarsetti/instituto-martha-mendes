import { useState, useRef, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Upload } from "lucide-react";
import { toast } from "sonner";
import mammoth from "mammoth";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  minHeight?: string;
}

// Convert HTML to Markdown
const htmlToMarkdown = (html: string): string => {
  let text = html;
  
  // Remove style tags and their content
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Headers
  text = text.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
  text = text.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
  text = text.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
  text = text.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');
  
  // Bold and italic
  text = text.replace(/<(strong|b)[^>]*>(.*?)<\/(strong|b)>/gi, '**$2**');
  text = text.replace(/<(em|i)[^>]*>(.*?)<\/(em|i)>/gi, '*$2*');
  
  // Lists
  text = text.replace(/<ul[^>]*>/gi, '\n');
  text = text.replace(/<\/ul>/gi, '\n');
  text = text.replace(/<ol[^>]*>/gi, '\n');
  text = text.replace(/<\/ol>/gi, '\n');
  text = text.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
  
  // Paragraphs and line breaks
  text = text.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n');
  text = text.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<div[^>]*>(.*?)<\/div>/gi, '$1\n');
  
  // Links
  text = text.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
  
  // Remove remaining HTML tags
  text = text.replace(/<[^>]+>/g, '');
  
  // Decode HTML entities
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");
  
  // Clean up extra whitespace
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.trim();
  
  return text;
};

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

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const renderMarkdown = (text: string) => {
    return text
      .split('\n\n')
      .map((paragraph, i) => {
        if (paragraph.startsWith('# ')) {
          return `<h1 key="${i}" class="text-3xl font-bold mb-4">${paragraph.slice(2)}</h1>`;
        }
        if (paragraph.startsWith('## ')) {
          return `<h2 key="${i}" class="text-2xl font-bold mb-3">${paragraph.slice(3)}</h2>`;
        }
        if (paragraph.startsWith('### ')) {
          return `<h3 key="${i}" class="text-xl font-bold mb-2">${paragraph.slice(4)}</h3>`;
        }
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').map(item => 
            item.startsWith('- ') ? `<li>${item.slice(2)}</li>` : item
          ).join('');
          return `<ul key="${i}" class="list-disc list-inside mb-4">${items}</ul>`;
        }
        return `<p key="${i}" class="mb-4">${paragraph}</p>`;
      })
      .join('');
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
            Suporta Markdown: # Título, ## Subtítulo, **negrito**, *itálico*, - lista | Cole do Word para converter automaticamente
          </p>
        </TabsContent>
        <TabsContent value="preview" className="mt-2">
          <div 
            className={`${minHeight} border rounded-md p-4 prose prose-sm max-w-none overflow-auto`}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
