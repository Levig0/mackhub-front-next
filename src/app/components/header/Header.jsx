import React, { useState } from "react";
import Image from "next/image";
import FiltrosMobile from "../filtros/FiltrosMobile";

import Styles from './header.module.css';

const Header = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <header className={Styles.header}>
      <nav className={Styles.navbar}>
        <div className={Styles.logo}>
            <Image src="/SVG.png" alt="MackHub logo" width={40} height={50}/>
          <span>MackHub</span>
        </div>
        <form className={Styles.filtros}>
          <select className={Styles.select}>
            <option>Selecionar Curso</option>
            <option value="SI">Sistemas de Informação</option>
            <option value="CC">Ciência da Computação</option>
          </select>
          <select className={Styles.select}>
            <option>Turma</option>
            <option value="J">J12</option>
            <option value="K">K12</option>
          </select>
          <select className={Styles.select}>
            <option>Disciplina</option>
            <option value="WM">Web Mobile</option>
            <option value="PS">Programação de Sistemas I</option>
            <option value="SO">Sistemas Operacionais</option>
            <option value="AL">Algoritmos</option>
            <option value="CA">Cálculo</option>
          </select>
        </form>
        <button className={Styles.mobileToggle} onClick={toggleMobileFilters}>
          <i className="fa-solid fa-sliders"></i>
        </button>
      </nav>
      {showMobileFilters && <FiltrosMobile />}
    </header>
  );
};

export default Header;
