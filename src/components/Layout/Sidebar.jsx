import React, { useState } from 'react';
import { FiMenu, FiX, FiLogOut, FiSettings, FiUser } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { logout, userData } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      showToast('Logout realizado com sucesso', 'success');
      navigate('/login');
    } catch (error) {
      showToast('Erro ao fazer logout', 'error');
    }
  };

  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '👥', label: 'Clientes', path: '/clients' },
    { icon: '📋', label: 'Propostas', path: '/proposals' },
    { icon: '📜', label: 'Contratos', path: '/contracts' },
    { icon: '✍️', label: 'Procurações', path: '/procurations' },
    { icon: '✅', label: 'Homologação', path: '/homologation' },
    { icon: '💰', label: 'Financeiro', path: '/financial' },
    { icon: '📅', label: 'Agenda', path: '/calendar' },
    { icon: '⚙️', label: 'Configurações', path: '/settings' },
  ];

  return (
    <>
      {/* Overlay Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-dark-900 to-dark-800
          text-white shadow-lg-soft z-50
          transform transition-transform duration-300 lg:relative lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-dark-700">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-solar-400 bg-clip-text text-transparent">
                AGATHA
              </h1>
              <p className="text-xs text-gray-400">Solar Energy CRM</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => {
                    navigate(item.path);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-dark-700 hover:text-white transition-all duration-200"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-dark-700">
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-dark-700 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-solar-500 flex items-center justify-center">
                <FiUser className="text-white" />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm font-semibold text-white truncate">
                  {userData?.displayName || 'Usuário'}
                </p>
                <p className="text-xs text-gray-400 capitalize">
                  {userData?.role}
                </p>
              </div>
            </button>

            {showProfileMenu && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-dark-700 rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => navigate('/settings')}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-dark-600 transition-all"
                >
                  <FiSettings className="w-4 h-4" />
                  Configurações
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-dark-600 transition-all border-t border-dark-600"
                >
                  <FiLogOut className="w-4 h-4" />
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 lg:hidden z-40 p-3 rounded-full bg-gradient-to-r from-primary-600 to-solar-500 text-white shadow-lg hover:shadow-lg-soft transition-all"
      >
        <FiMenu className="w-6 h-6" />
      </button>
    </>
  );
};

export default Sidebar;