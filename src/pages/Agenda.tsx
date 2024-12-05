import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Plus } from "lucide-react";

const Agenda = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-heading font-bold">Agenda</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Nova Consulta
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-center h-[500px]">
          <CalendarIcon className="h-16 w-16 text-gray-300" />
          <p className="text-gray-500 ml-4">Calendário será implementado aqui</p>
        </div>
      </Card>
    </div>
  );
};

export default Agenda;