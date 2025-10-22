import React from "react";
import Styles from "./nav.module.css";

const tabs = [
  { id: "agenda", icon: "fa-calendar", label: "Agenda" },
  { id: "pacote", icon: "fa-file-lines", label: "Pacote de estudos" },
  { id: "cards", icon: "fa-note-sticky", label: "Cards de memória" },
  { id: "quiz", icon: "fa-clock", label: "Quiz" },
  { id: "simulador", icon: "fa-calculator", label: "Simulador de nota" },
];

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  return (
    <nav className={Styles.navTabs}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${Styles.tabButton} ${activeTab === tab.id ? Styles.active : ""}`}
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
