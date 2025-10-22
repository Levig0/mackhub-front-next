"use client"

import styles from "./page.module.css";

import React, { useState } from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import NavigationTabs from "./components/NavigationTabs";
import AgendaSection from "./components/AgendaSection";
import PacoteSection from "./components/PacoteSection";
import SimuladorSection from "./components/SimuladorSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("agenda");

  return (
    <div className="app">
      <Header />
      <UserProfile />
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === "agenda" && <AgendaSection />}
        {activeTab === "pacote" && <PacoteSection />}
        {activeTab === "cards" && <CardsSection />}
        {activeTab === "quiz" && <QuizSection />}
        {activeTab === "simulador" && <SimuladorSection />}
      </main>
    </div>
  );
}
