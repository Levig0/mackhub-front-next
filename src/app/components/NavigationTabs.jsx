import React from "react";

// Lista de abas que serão exibidas na navegação
const tabs = [
  { id: "agenda", icon: "fa-calendar", label: "Agenda" },
  { id: "pacote", icon: "fa-file-lines", label: "Pacote de estudos" },
  { id: "cards", icon: "fa-note-sticky", label: "Cards de memória" },
  { id: "quiz", icon: "fa-clock", label: "Quiz" },
  { id: "simulador", icon: "fa-calculator", label: "Simulador de nota" },
];

// Componente que renderiza as abas de navegação
const NavigationTabs = ({ activeTab, setActiveTab }) => {
  return (
    // Contêiner principal das tabs
    <nav className="nav-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id} // chave única para o React
          className={`tab-button ${activeTab === tab.id ? "active" : ""}`} // marca a aba ativa
          onClick={() => setActiveTab(tab.id)} // troca a aba ao clicar
        >
          {/* Ícone da aba */}
          <i className={`fa-regular ${tab.icon}`}></i>

          {/* Texto da aba */}
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default NavigationTabs;
