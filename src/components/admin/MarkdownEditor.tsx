import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  minHeight?: string;
}

export function MarkdownEditor({ value, onChange, label, minHeight = "min-h-[400px]" }: MarkdownEditorProps) {
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");

  const renderMarkdown = (text: string) => {
    // Simple markdown rendering for preview
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
      <Label>{label}</Label>
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "edit" | "preview")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="edit">Editar</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="edit" className="mt-2">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Escreva seu conteúdo em Markdown..."
            className={minHeight}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Suporta Markdown: # Título, ## Subtítulo, **negrito**, *itálico*, - lista
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
