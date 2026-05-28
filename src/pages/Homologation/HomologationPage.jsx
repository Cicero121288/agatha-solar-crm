import React from 'react';
import { FiArrowLeft, FiCheckCircle, FiClock, FiAlert } from 'react-icons/fi';
import MainLayout from '../../components/Layout/MainLayout';
import { useNavigate } from 'react-router-dom';

const HomologationPage = () => {
  const navigate = useNavigate();

  const homologations = [
    {
      id: 1,
      cliente: 'João Silva',
      uc: 'SA123456789',
      status: 'Homologado',
      statusColor: 'bg-green-100 text-green-800',
      icon: FiCheckCircle,
      iconColor: 'text-green-600',
      data: '20/05/2024'
    },
    {
      id: 2,
      cliente: 'Maria Santos',
      uc: 'SA987654321',
      status: 'Aguardando',
      statusColor: 'bg-yellow-100 text-yellow-800',
      icon: FiClock,
      iconColor: 'text-yellow-600',
      data: '15/05/2024'
    },
    {
      id: 3,
      cliente: 'Pedro Oliveira',
      uc: 'SA456789123',
      status: 'Erro',
      statusColor: 'bg-red-100 text-red-800',
      icon: FiAlert,
      iconColor: 'text-red-600',
      data: '10/05/2024'
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-all"
          >
            <FiArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h2 className="text-3xl font-bold text-dark-900">Homologação</h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-soft p-6">
            <p className="text-gray-600 text-sm mb-2">Total Homologado</p>
            <p className="text-3xl font-bold text-green-600">45</p>
          </div>
          <div className="bg-white rounded-xl shadow-soft p-6">
            <p className="text-gray-600 text-sm mb-2">Aguardando</p>
            <p className="text-3xl font-bold text-yellow-600">12</p>
          </div>
          <div className="bg-white rounded-xl shadow-soft p-6">
            <p className="text-gray-600 text-sm mb-2">Com Erro</p>
            <p className="text-3xl font-bold text-red-600">3</p>
          </div>
        </div>

        {/* Homologations List */}
        <div className="space-y-4">
          {homologations.map((hom) => {
            const Icon = hom.icon;
            return (
              <div key={hom.id} className="bg-white rounded-xl shadow-soft p-6 hover:shadow-md-soft transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gray-100 ${hom.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-900">{hom.cliente}</h3>
                      <p className="text-gray-600 text-sm">UC: {hom.uc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${hom.statusColor}`}>
                      {hom.status}
                    </span>
                    <p className="text-gray-600 text-xs mt-2">{hom.data}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-soft p-6">
          <h3 className="text-lg font-semibold text-dark-900 mb-4">Sobre Homologação</h3>
          <p className="text-gray-600 mb-4">
            Acompanhe o status de homologação dos seus projetos junto às distribuidoras de energia.
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <p>✓ Checklist completo: RG, CPF, Conta de Energia, Procuração e Contrato</p>
            <p>✓ Status em tempo real: Proposta → Contrato → Projeto → Instalação → Homologação → Concluído</p>
            <p>✓ Integração com distribuidoras parceiras</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomologationPage;
