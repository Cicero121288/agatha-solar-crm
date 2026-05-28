import React, { useState, useEffect } from 'react';
import { FiTrendingUp, FiUsers, FiZap, FiCheckCircle } from 'react-icons/fi';
import MainLayout from '../../components/Layout/MainLayout';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DashboardPage = () => {
  const [kpis] = useState([
    { label: 'Total de Clientes', value: '124', icon: FiUsers, color: 'from-blue-500 to-blue-600', change: '+12.5%' },
    { label: 'Potência Instalada', value: '2.5 MW', icon: FiZap, color: 'from-yellow-500 to-orange-500', change: '+8.2%' },
    { label: 'Valor Vendido', value: 'R$ 1.8M', icon: FiTrendingUp, color: 'from-green-500 to-green-600', change: '+23.1%' },
    { label: 'Projetos Homologados', value: '45', icon: FiCheckCircle, color: 'from-purple-500 to-purple-600', change: '+5.7%' },
  ]);

  const [chartData] = useState([
    { mes: 'Jan', vendas: 45000, homologacoes: 24 },
    { mes: 'Fev', vendas: 52000, homologacoes: 32 },
    { mes: 'Mar', vendas: 48000, homologacoes: 28 },
    { mes: 'Abr', vendas: 61000, homologacoes: 38 },
    { mes: 'Mai', vendas: 55000, homologacoes: 35 },
    { mes: 'Jun', vendas: 67000, homologacoes: 42 },
  ]);

  const [potenciaData] = useState([
    { name: 'Residencial', value: 1200, fill: '#3b82f6' },
    { name: 'Comercial', value: 800, fill: '#f59e0b' },
    { name: 'Industrial', value: 500, fill: '#ef4444' },
  ]);

  const [recentClients] = useState([
    { id: 1, name: 'João Silva', cidade: 'São Paulo', potencia: '8 kWp', status: 'Proposta' },
    { id: 2, name: 'Maria Santos', cidade: 'Rio de Janeiro', potencia: '15 kWp', status: 'Homologado' },
    { id: 3, name: 'Pedro Oliveira', cidade: 'Belo Horizonte', potencia: '12 kWp', status: 'Instalação' },
    { id: 4, name: 'Ana Costa', cidade: 'Curitiba', potencia: '10 kWp', status: 'Proposta' },
  ]);

  const [projectStatus] = useState([
    { label: 'Proposta', count: 28, color: 'bg-blue-100 text-blue-800' },
    { label: 'Contrato', count: 15, color: 'bg-yellow-100 text-yellow-800' },
    { label: 'Projeto', count: 12, color: 'bg-purple-100 text-purple-800' },
    { label: 'Instalação', count: 18, color: 'bg-orange-100 text-orange-800' },
    { label: 'Homologação', count: 8, color: 'bg-green-100 text-green-800' },
    { label: 'Concluído', count: 45, color: 'bg-green-600 text-white' },
  ]);

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-soft p-6 hover:shadow-md-soft transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${kpi.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-green-600">{kpi.change}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{kpi.label}</p>
                <h3 className="text-2xl font-bold text-dark-900">{kpi.value}</h3>
              </div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Vendas Mensais */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-soft p-6">
            <h3 className="text-lg font-bold text-dark-900 mb-4">Vendas Mensais</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="mes" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                <Area type="monotone" dataKey="vendas" stroke="#3b82f6" fillOpacity={1} fill="url(#colorVendas)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Potência Instalada */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h3 className="text-lg font-bold text-dark-900 mb-4">Potência por Categoria</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={potenciaData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {potenciaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Fluxo Financeiro */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h3 className="text-lg font-bold text-dark-900 mb-4">Homologações Mensais</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="mes" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
              <Legend />
              <Bar dataKey="homologacoes" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Status dos Projetos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Status Grid */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-bold text-dark-900 mb-4">Status dos Projetos</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {projectStatus.map((status, index) => (
                  <div key={index} className={`p-4 rounded-lg ${status.color} text-center`}>
                    <p className="text-2xl font-bold">{status.count}</p>
                    <p className="text-sm font-medium">{status.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumo Financeiro */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <h3 className="text-lg font-bold text-dark-900 mb-4">Resumo Financeiro</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Entradas</span>
                <span className="text-lg font-bold text-green-600">R$ 450.5k</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Parcelas</span>
                <span className="text-lg font-bold text-blue-600">R$ 280.2k</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Pendentes</span>
                <span className="text-lg font-bold text-red-600">R$ 125.8k</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-semibold text-dark-900">Total</span>
                <span className="text-lg font-bold text-dark-900">R$ 856.5k</span>
              </div>
            </div>
          </div>
        </div>

        {/* Últimos Clientes */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h3 className="text-lg font-bold text-dark-900 mb-4">Últimos Clientes Cadastrados</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Nome</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Cidade</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Potência</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentClients.map((client) => (
                  <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-dark-900">{client.name}</td>
                    <td className="py-3 px-4 text-gray-600">{client.cidade}</td>
                    <td className="py-3 px-4 text-gray-600">{client.potencia}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                        {client.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
