import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { X, Plus } from "lucide-react";
import { CourseModule } from "@/types";

interface ModulesArrayInputProps {
  modules: CourseModule[];
  onChange: (modules: CourseModule[]) => void;
}

export const ModulesArrayInput = ({ modules, onChange }: ModulesArrayInputProps) => {
  const addModule = () => {
    onChange([
      ...modules,
      { id: `mod_${Date.now()}`, title: "", topics: [""] }
    ]);
  };

  const removeModule = (index: number) => {
    onChange(modules.filter((_, i) => i !== index));
  };

  const updateModule = (index: number, field: 'title', value: string) => {
    const updated = [...modules];
    updated[index][field] = value;
    onChange(updated);
  };

  const addTopic = (moduleIndex: number) => {
    const updated = [...modules];
    updated[moduleIndex].topics.push("");
    onChange(updated);
  };

  const removeTopic = (moduleIndex: number, topicIndex: number) => {
    const updated = [...modules];
    updated[moduleIndex].topics = updated[moduleIndex].topics.filter((_, i) => i !== topicIndex);
    onChange(updated);
  };

  const updateTopic = (moduleIndex: number, topicIndex: number, value: string) => {
    const updated = [...modules];
    updated[moduleIndex].topics[topicIndex] = value;
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {modules.map((module, moduleIndex) => (
        <Card key={module.id} className="p-4 border-2">
          <div className="flex items-start justify-between mb-4">
            <h4 className="font-semibold text-lg">Módulo {moduleIndex + 1}</h4>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeModule(moduleIndex)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label>Título do Módulo</Label>
              <Input
                value={module.title}
                onChange={(e) => updateModule(moduleIndex, 'title', e.target.value)}
                placeholder="Ex: Fundamentos da Terapia"
              />
            </div>

            <div>
              <Label>Tópicos</Label>
              <div className="space-y-2 mt-2">
                {module.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex gap-2">
                    <Input
                      value={topic}
                      onChange={(e) => updateTopic(moduleIndex, topicIndex, e.target.value)}
                      placeholder="Ex: História e desenvolvimento"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTopic(moduleIndex, topicIndex)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addTopic(moduleIndex)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Tópico
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}

      <Button type="button" variant="outline" onClick={addModule} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Adicionar Módulo
      </Button>
    </div>
  );
};