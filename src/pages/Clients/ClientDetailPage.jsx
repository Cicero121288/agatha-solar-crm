import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';

const ClientDetailPage = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-dark-900">Detalhes do Cliente</h2>
          <button className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-solar-500 text-white font-semibold rounded-lg">
            Editar Cliente
          </button>
        </div>

        {/* Placeholder */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <p className="text-gray-600">Página de detalhes do cliente em desenvolvimento...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ClientDetailPage;
