import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

interface DatesArrayInputProps {
  dates: string[];
  onChange: (dates: string[]) => void;
}

export function DatesArrayInput({ dates, onChange }: DatesArrayInputProps) {
  const addDate = () => {
    onChange([...dates, ""]);
  };

  const removeDate = (index: number) => {
    onChange(dates.filter((_, i) => i !== index));
  };

  const updateDate = (index: number, value: string) => {
    const newDates = [...dates];
    newDates[index] = value;
    onChange(newDates);
  };

  return (
    <div className="space-y-2">
      <Label>Datas de Início das Turmas</Label>
      {dates.map((date, index) => (
        <div key={index} className="flex gap-2">
          <Input
            type="date"
            value={date}
            onChange={(e) => updateDate(index, e.target.value)}
            className="flex-1"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => removeDate(index)}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ))}
      <Button type="button" variant="outline" onClick={addDate} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Adicionar Data
      </Button>
    </div>
  );
}
