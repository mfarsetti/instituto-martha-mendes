import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ImagePicker } from "@/components/admin/ImagePicker";
import { TagInput } from "@/components/admin/TagInput";
import { X, Plus } from "lucide-react";
import { CourseTeacher } from "@/types";

interface TeachersArrayInputProps {
  teachers: CourseTeacher[];
  onChange: (teachers: CourseTeacher[]) => void;
}

export const TeachersArrayInput = ({ teachers, onChange }: TeachersArrayInputProps) => {
  const addTeacher = () => {
    onChange([
      ...teachers,
      { id: `teacher_${Date.now()}`, name: "", photo: "", role: "", bio: "", specialties: [] }
    ]);
  };

  const removeTeacher = (index: number) => {
    onChange(teachers.filter((_, i) => i !== index));
  };

  const updateTeacher = (index: number, field: keyof CourseTeacher, value: any) => {
    const updated = [...teachers];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {teachers.map((teacher, index) => (
        <Card key={teacher.id} className="p-4 border-2">
          <div className="flex items-start justify-between mb-4">
            <h4 className="font-semibold text-lg">Docente {index + 1}</h4>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeTeacher(index)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Nome</Label>
                <Input
                  value={teacher.name}
                  onChange={(e) => updateTeacher(index, 'name', e.target.value)}
                  placeholder="Ex: Dra. Martha Mendes"
                />
              </div>
              <div>
                <Label>Cargo/Função</Label>
                <Input
                  value={teacher.role}
                  onChange={(e) => updateTeacher(index, 'role', e.target.value)}
                  placeholder="Ex: Coordenadora do Curso"
                />
              </div>
            </div>

            <div>
              <Label>Foto (URL)</Label>
              <ImagePicker
                label=""
                value={teacher.photo}
                onChange={(url) => updateTeacher(index, 'photo', url)}
              />
            </div>

            <div>
              <Label>Biografia</Label>
              <Textarea
                value={teacher.bio}
                onChange={(e) => updateTeacher(index, 'bio', e.target.value)}
                placeholder="Breve biografia profissional..."
                className="min-h-[100px]"
              />
            </div>

            <div>
              <Label>Especialidades</Label>
              <TagInput
                tags={teacher.specialties}
                onChange={(tags) => updateTeacher(index, 'specialties', tags)}
              />
            </div>
          </div>
        </Card>
      ))}

      <Button type="button" variant="outline" onClick={addTeacher} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Adicionar Docente
      </Button>
    </div>
  );
};