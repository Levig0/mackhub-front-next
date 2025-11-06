import React from "react";

const tabs = [
  { id: "agenda", icon: "fa-calendar", label: "Agenda" },
  { id: "pacote", icon: "fa-file-lines", label: "Pacote de estudos" },
  { id: "cards", icon: "fa-note-sticky", label: "Cards de memória" },
  { id: "quiz", icon: "fa-clock", label: "Quiz" },
  { id: "simulador", icon: "fa-calculator", label: "Simulador de nota" },
];

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="nav-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <i className={`fa-regular ${tab.icon}`}></i>
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default NavigationTabs;
