import React from "react";
import Styles from "./nav.module.css"; // Importa o CSS module específico da navegação
import { FaRegCalendar , FaRegStickyNote , FaRegClock } from "react-icons/fa"; // Ícones do pacote react-icons (FontAwesome)
import { FaRegFileLines } from "react-icons/fa6"; // Ícone do FontAwesome v6
import { IoCalculatorOutline } from "react-icons/io5"; // Ícone do Ionicons

// Lista de abas disponíveis na navegação, cada uma com id, ícone e label
const tabs = [
  { id: "agenda", icon: FaRegCalendar , label: "Agenda" },
  { id: "pacote", icon: FaRegFileLines , label: "Pacote de estudos" },
  { id: "cards", icon: FaRegStickyNote, label: "Cards de memória" },
  { id: "quiz", icon: FaRegClock, label: "Quiz" },
  { id: "simulador", icon: IoCalculatorOutline, label: "Simulador de nota" },
];

// Componente principal responsável pelas tabs de navegação
const NavigationTabs = ({ activeTab, setActiveTab }) => {
  return (
    // Container principal do menu de navegação
    <nav className={Styles.navTabs}>
      {/* Container interno que agrupa os botões das tabs */}
      <section className={Styles.tabContainer}>
        {tabs.map((tab) => {
          const Icon = tab.icon; // Pega o componente do ícone correspondente

          return (
            <button
              key={tab.id} // chave única para React
              // Aplica a classe de tab + classe "active" caso seja a aba selecionada
              className={`${Styles.tabButton} ${activeTab === tab.id ? Styles.active : ""}`}
              onClick={() => setActiveTab(tab.id)} // Troca de aba ao clicar
            >
              <Icon className={Styles.icon} /> {/* Ícone da tab */}
              <span>{tab.label}</span> {/* Texto descritivo da tab */}
            </button>
          );
        })}
      </section>
    </nav>
  );
};

export default NavigationTabs; // Exporta o componente
