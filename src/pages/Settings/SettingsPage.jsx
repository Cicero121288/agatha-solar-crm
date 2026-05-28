import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import MainLayout from '../../components/Layout/MainLayout';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();

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
          <h2 className="text-3xl font-bold text-dark-900">Configurações</h2>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Settings */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Perfil</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <button className="px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700">
                  Salvar Alterações
                </button>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Segurança</h3>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 border border-gray-300 rounded-lg font-medium text-dark-900 hover:bg-gray-50 transition-all">
                  Alterar Senha
                </button>
                <button className="w-full px-4 py-3 border border-gray-300 rounded-lg font-medium text-dark-900 hover:bg-gray-50 transition-all">
                  Autenticação em Duas Etapas
                </button>
              </div>
            </div>

            {/* System Settings */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Sistema</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <label className="text-gray-700">Tema Escuro</label>
                  <input type="checkbox" className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <label className="text-gray-700">Notificações</label>
                  <input type="checkbox" className="w-5 h-5" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-gray-700">Backup Automático</label>
                  <input type="checkbox" className="w-5 h-5" defaultChecked />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Informações</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600">Versão</p>
                  <p className="font-semibold text-dark-900">1.0.0</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Última Atualização</p>
                  <p className="font-semibold text-dark-900">28/05/2024</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Suporte</p>
                  <p className="font-semibold text-primary-600 cursor-pointer">contato@agatha.solar</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Perigo</h3>
              <button className="w-full px-4 py-2 bg-red-100 text-red-600 font-semibold rounded-lg hover:bg-red-200 transition-all">
                Deletar Conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
