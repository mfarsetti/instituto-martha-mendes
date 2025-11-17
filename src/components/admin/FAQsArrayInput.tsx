import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { X, Plus } from "lucide-react";
import { CourseFAQ } from "@/types";

interface FAQsArrayInputProps {
  faqs: CourseFAQ[];
  onChange: (faqs: CourseFAQ[]) => void;
}

export const FAQsArrayInput = ({ faqs, onChange }: FAQsArrayInputProps) => {
  const addFAQ = () => {
    onChange([
      ...faqs,
      { id: `faq_${Date.now()}`, question: "", answer: "" }
    ]);
  };

  const removeFAQ = (index: number) => {
    onChange(faqs.filter((_, i) => i !== index));
  };

  const updateFAQ = (index: number, field: 'question' | 'answer', value: string) => {
    const updated = [...faqs];
    updated[index][field] = value;
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card key={faq.id} className="p-4 border-2">
          <div className="flex items-start justify-between mb-4">
            <h4 className="font-semibold text-lg">FAQ {index + 1}</h4>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeFAQ(index)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label>Pergunta</Label>
              <Input
                value={faq.question}
                onChange={(e) => updateFAQ(index, 'question', e.target.value)}
                placeholder="Ex: Preciso ter formação prévia?"
              />
            </div>

            <div>
              <Label>Resposta</Label>
              <Textarea
                value={faq.answer}
                onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
                placeholder="Resposta completa..."
                className="min-h-[100px]"
              />
            </div>
          </div>
        </Card>
      ))}

      <Button type="button" variant="outline" onClick={addFAQ} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Adicionar Pergunta
      </Button>
    </div>
  );
};