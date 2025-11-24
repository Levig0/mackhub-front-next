import React from 'react'
import Styles from './cards.module.css';
import { FaPlus } from "react-icons/fa";

function CardsSection() {
  return (
    <div className={Styles.cardsSectionContainer}>
      <div className={Styles.headerAndButtonContainer}>
        <div className={Styles.sectionHeader}>
          <div className={Styles.titleGroup}>
            <i className="fa-regular fa-file-lines" style={{ color: "#b01c1c" }}></i>
            <h2>Cards </h2>
          </div>
          <div className={Styles.subtitleGroup}>
            <p className={Styles.sectionSubHeader}>0 cartões criados</p>
          </div>
        </div>
        <div className={Styles.newCardButtonContainer}>
          <button className={Styles.primaryButton}>
            <i className="fa-solid fa-plus"></i>
            Novo Cartão
          </button>
        </div>
      </div>
      
      <div className={Styles.placeHolder}>
        <div className={Styles.iconWrapper}>
          <FaPlus size={32} color="#b01c1c" />
        </div>
        <h1>Nenhum FlashCard ainda</h1>
        <p>Crie seu primeiro flashcard para começar a estudar de forma interativa.</p>
        <button className={Styles.placeholderButton}>Crie seu primeiro Flashcard</button>
      </div>
    </div>
  )
}

export default CardsSection