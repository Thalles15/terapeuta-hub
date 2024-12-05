import { Card } from "@/components/ui/card";
import { Calendar, Users, CreditCard, MessageSquare } from "lucide-react";

const stats = [
  {
    title: "Consultas Hoje",
    value: "5",
    icon: Calendar,
    color: "text-blue-500",
  },
  {
    title: "Total de Pacientes",
    value: "42",
    icon: Users,
    color: "text-green-500",
  },
  {
    title: "Pagamentos Pendentes",
    value: "R$ 1.500",
    icon: CreditCard,
    color: "text-red-500",
  },
  {
    title: "Mensagens",
    value: "3",
    icon: MessageSquare,
    color: "text-yellow-500",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-heading font-semibold mb-4">Próximas Consultas</h2>
          <div className="space-y-4">
            {/* Lista de próximas consultas será implementada aqui */}
            <p className="text-gray-500">Carregando consultas...</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-heading font-semibold mb-4">Atividades Recentes</h2>
          <div className="space-y-4">
            {/* Lista de atividades será implementada aqui */}
            <p className="text-gray-500">Carregando atividades...</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;