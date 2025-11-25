// Importa React para criação do componente
import React from 'react'

// Importa o módulo de estilos CSS
import Styles from './cards.module.css';

// Importa o ícone FaPlus da biblioteca react-icons
import { FaPlus } from "react-icons/fa";

// Componente principal da seção de Cards
function CardsSection() {
  return (
    // Container principal da seção de cards
    <div className={Styles.cardsSectionContainer}>

      {/* Cabeçalho da seção e botão de novo cartão */}
      <div className={Styles.headerAndButtonContainer}>

        {/* Grupo que contém título e subtítulo */}
        <div className={Styles.sectionHeader}>

          {/* Título com ícone */}
          <div className={Styles.titleGroup}>
            <i className="fa-regular fa-file-lines" style={{ color: "#b01c1c" }}></i>
            <h2>Cards </h2>
          </div>

          {/* Subtítulo exibindo total de cartões criados */}
          <div className={Styles.subtitleGroup}>
            <p className={Styles.sectionSubHeader}>0 cartões criados</p>
          </div>
        </div>

        {/* Botão para criar um novo cartão */}
        <div className={Styles.newCardButtonContainer}>
          <button className={Styles.primaryButton}>
            <i className="fa-solid fa-plus"></i>
            Novo Cartão
          </button>
        </div>
      </div>
      
      {/* Placeholder exibido quando não há flashcards criados */}
      <div className={Styles.placeHolder}>

        {/* Ícone central grande */}
        <div className={Styles.iconWrapper}>
          <FaPlus size={32} color="#b01c1c" />
        </div>

        {/* Mensagem principal */}
        <h1>Nenhum FlashCard ainda</h1>

        {/* Texto explicativo */}
        <p>Crie seu primeiro flashcard para começar a estudar de forma interativa.</p>

        {/* Botão para criar o primeiro flashcard */}
        <button className={Styles.placeholderButton}>
          Crie seu primeiro Flashcard
        </button>
      </div>
    </div>
  )
}

// Exporta o componente para uso externo
export default CardsSection
