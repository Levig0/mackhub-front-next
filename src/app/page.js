"use client"

import styles from "./page.module.css";

import React, { useState } from "react";
import Header from "./components/header/Header";
import UserProfile from "./components/userProfile/UserProfile";
import NavigationTabs from "./components/navbar/NavigationTabs";
import AgendaSection from "./agenda/AgendaSection";
import PacoteSection from "./pacoteEstudos/PacoteSection";
import CardsSection from "./cards/CardsSection";
import QuizSection from "./quiz/QuizSection";
import SimuladorSection from "./simuladorNotas/SimuladorSection";


export default function Home() {
  const [activeTab, setActiveTab] = useState("agenda");

  return (
    <div className={styles.app}>
      <Header />
      <UserProfile />
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className={styles.conteudoPrincipal}>
        {activeTab === "agenda" && <AgendaSection />}
        {activeTab === "pacote" && <PacoteSection />}
        {activeTab === "cards" && <CardsSection />}
        {activeTab === "quiz" && <QuizSection />}
        {activeTab === "simulador" && <SimuladorSection />}
      </main>
    </div>
  );
}
