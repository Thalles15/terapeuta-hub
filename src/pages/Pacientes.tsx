import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

type Patient = {
  id: string;
  photo: string;
  name: string;
  age: string;
  location: string;
  basicInfo: string;
  demandAssessment: string;
  treatmentGoals: string;
};

const Pacientes = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSavePatient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newPatient: Patient = {
      id: crypto.randomUUID(),
      photo: formData.get("photo") as string || "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      name: formData.get("name") as string,
      age: formData.get("age") as string,
      location: formData.get("location") as string,
      basicInfo: formData.get("basicInfo") as string,
      demandAssessment: formData.get("demandAssessment") as string,
      treatmentGoals: formData.get("treatmentGoals") as string,
    };

    setPatients(prev => [...prev, newPatient]);
    toast.success("Paciente adicionado com sucesso!");
    setIsDialogOpen(false); // Close the dialog after saving
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-heading font-bold">Pacientes</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Novo Paciente
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Paciente</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSavePatient} className="space-y-6">
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="photo">Foto (URL)</Label>
                  <Input id="photo" name="photo" placeholder="URL da foto" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="age">Idade</Label>
                  <Input id="age" name="age" type="number" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Cidade e Estado</Label>
                  <Input id="location" name="location" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="basicInfo">Informações Básicas</Label>
                  <Textarea id="basicInfo" name="basicInfo" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="demandAssessment">Avaliação da Demanda</Label>
                  <Textarea id="demandAssessment" name="demandAssessment" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="treatmentGoals">Objetivos do Tratamento</Label>
                  <Textarea id="treatmentGoals" name="treatmentGoals" required />
                </div>
              </div>
              <Button type="submit" className="w-full">Salvar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="p-6">
        {patients.length === 0 ? (
          <p className="text-gray-500 text-center">Nenhum paciente cadastrado</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {patients.map((patient) => (
              <Card key={patient.id} className="p-4">
                <div className="flex flex-col items-center space-y-4">
                  <img 
                    src={patient.photo} 
                    alt={patient.name} 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h3 className="font-semibold">{patient.name}</h3>
                    <p className="text-sm text-gray-500">{patient.age} anos</p>
                    <p className="text-sm text-gray-500">{patient.location}</p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <FileText className="h-4 w-4 mr-2" />
                        Ver Detalhes
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Detalhes do Paciente</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img 
                          src={patient.photo} 
                          alt={patient.name} 
                          className="w-32 h-32 rounded-full object-cover mx-auto"
                        />
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold">Nome</h4>
                            <p>{patient.name}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Idade</h4>
                            <p>{patient.age} anos</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Localização</h4>
                            <p>{patient.location}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Informações Básicas</h4>
                            <p>{patient.basicInfo}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Avaliação da Demanda</h4>
                            <p>{patient.demandAssessment}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Objetivos do Tratamento</h4>
                            <p>{patient.treatmentGoals}</p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default Pacientes;