import React from "react";
import Styles from "./nav.module.css";
import { FaRegCalendar , FaRegStickyNote , FaRegClock } from "react-icons/fa";
import { FaRegFileLines  } from "react-icons/fa6";
import { IoCalculatorOutline } from "react-icons/io5";


const tabs = [
  { id: "agenda", icon: FaRegCalendar , label: "Agenda" },
  { id: "pacote", icon: FaRegFileLines , label: "Pacote de estudos" },
  { id: "cards", icon: FaRegStickyNote, label: "Cards de memória" },
  { id: "quiz", icon: FaRegClock, label: "Quiz" },
  { id: "simulador", icon: IoCalculatorOutline, label: "Simulador de nota" },
];

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  return (
    <nav className={Styles.navTabs}>
      <section className={Styles.tabContainer}>
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              className={`${Styles.tabButton} ${activeTab === tab.id ? Styles.active : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon className={Styles.icon} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </section>
    </nav>
  );
};

export default NavigationTabs;