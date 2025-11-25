"use client"
// Indica que este componente roda no lado do cliente (Client Component)

import styles from "./page.module.css";
// Importa os estilos específicos da página

import React, { useState } from "react";
// Importa React e o hook useState

import Header from "./components/header/Header";
// Componente do cabeçalho

import UserProfile from "./components/userProfile/UserProfile";
// Componente que exibe informações do usuário

import NavigationTabs from "./components/navbar/NavigationTabs";
// Componente responsável pelas tabs de navegação

import AgendaSection from "./agenda/AgendaSection";
// Seção da Agenda

import PacoteSection from "./pacoteEstudos/PacoteSection";
// Seção do Pacote de Estudos

import CardsSection from "./cards/CardsSection";
// Seção dos Cards de estudo

import QuizSection from "./quiz/QuizSection";
// Seção dos Quizzes

import SimuladorSection from "./simuladorNotas/SimuladorSection";
// Seção do Simulador de Notas


export default function Home() {
  const [activeTab, setActiveTab] = useState("agenda");
  // Estado que armazena qual aba está ativa — padrão é "agenda"

  return (
    <div className={styles.app}>
      {/* Cabeçalho */}
      <Header />

      {/* Perfil do usuário */}
      <UserProfile />

      {/* Navegação entre seções */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className={styles.conteudoPrincipal}>
        {/* Renderiza cada seção dependendo da aba ativa */}
        {activeTab === "agenda" && <AgendaSection />}
        {activeTab === "pacote" && <PacoteSection />}
        {activeTab === "cards" && <CardsSection />}
        {activeTab === "quiz" && <QuizSection />}
        {activeTab === "simulador" && <SimuladorSection />}
      </main>
    </div>
  );
}

