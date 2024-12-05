import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Prontuarios = () => {
  const [dreams, setDreams] = useState("");
  const [complaints, setComplaints] = useState("");
  const [observations, setObservations] = useState("");

  const handleSave = () => {
    // Here you would typically save to a backend
    toast.success("Anotações salvas com sucesso!");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading font-bold">Prontuários</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Sonhos do Paciente</h2>
          <Textarea
            className="min-h-[200px] mb-4"
            placeholder="Registre aqui os sonhos relatados pelo paciente..."
            value={dreams}
            onChange={(e) => setDreams(e.target.value)}
          />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Queixas</h2>
          <Textarea
            className="min-h-[200px] mb-4"
            placeholder="Registre aqui as queixas do paciente..."
            value={complaints}
            onChange={(e) => setComplaints(e.target.value)}
          />
        </Card>

        <Card className="p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Observações e Anotações</h2>
          <Textarea
            className="min-h-[200px] mb-4"
            placeholder="Registre aqui suas observações sobre o paciente..."
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
          />
        </Card>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave}>
          Salvar Anotações
        </Button>
      </div>
    </div>
  );
};

export default Prontuarios;