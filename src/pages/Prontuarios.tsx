import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Prontuarios = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [infoBasica, setInfoBasica] = useState("");
  const [avaliacaoDemanda, setAvaliacaoDemanda] = useState("");
  const [objetivos, setObjetivos] = useState("");
  const [evolucao, setEvolucao] = useState("");
  const [encaminhamentos, setEncaminhamentos] = useState("");

  const handleSave = () => {
    // Here you would typically save to a backend
    toast.success("Prontuário salvo com sucesso!");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading font-bold">Prontuário</h1>
      
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome do Paciente</Label>
            <Input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome completo"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="idade">Idade</Label>
            <Input
              id="idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              placeholder="Idade"
              type="number"
            />
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="info-basica">
            <AccordionTrigger>Informações Básicas</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[150px]"
                placeholder="Registre aqui as informações básicas do paciente..."
                value={infoBasica}
                onChange={(e) => setInfoBasica(e.target.value)}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="avaliacao">
            <AccordionTrigger>Avaliação da Demanda</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[150px]"
                placeholder="Registre aqui a avaliação da demanda..."
                value={avaliacaoDemanda}
                onChange={(e) => setAvaliacaoDemanda(e.target.value)}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="objetivos">
            <AccordionTrigger>Objetivos do Tratamento</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[150px]"
                placeholder="Registre aqui os objetivos do tratamento..."
                value={objetivos}
                onChange={(e) => setObjetivos(e.target.value)}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="evolucao">
            <AccordionTrigger>Evolução do Paciente</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[150px]"
                placeholder="Registre aqui a evolução do paciente..."
                value={evolucao}
                onChange={(e) => setEvolucao(e.target.value)}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="encaminhamentos">
            <AccordionTrigger>Encaminhamentos/Encerramento</AccordionTrigger>
            <AccordionContent>
              <Textarea
                className="min-h-[150px]"
                placeholder="Registre aqui os encaminhamentos ou informações sobre o encerramento do trabalho..."
                value={encaminhamentos}
                onChange={(e) => setEncaminhamentos(e.target.value)}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave}>
          Salvar Prontuário
        </Button>
      </div>
    </div>
  );
};

export default Prontuarios;