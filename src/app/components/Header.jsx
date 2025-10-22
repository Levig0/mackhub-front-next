import React, { useState } from "react";
import Image from "next/image";
import FiltrosMobile from "./FiltrosMobile";

const Header = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
            <Image src="/SVG.png" alt="MackHub logo" width={40} height={50}/>
          <span>MackHub</span>
        </div>
        <form className="filtros">
          <select className="select">
            <option>Selecionar Curso</option>
            <option value="SI">Sistemas de Informação</option>
            <option value="CC">Ciência da Computação</option>
          </select>
          <select className="select">
            <option>Turma</option>
            <option value="J">J12</option>
            <option value="K">K12</option>
          </select>
          <select className="select">
            <option>Disciplina</option>
            <option value="WM">Web Mobile</option>
            <option value="PS">Programação de Sistemas I</option>
            <option value="SO">Sistemas Operacionais</option>
            <option value="AL">Algoritmos</option>
            <option value="CA">Cálculo</option>
          </select>
        </form>
        <button className="mobile-toggle" onClick={toggleMobileFilters}>
          <i className="fa-solid fa-sliders"></i>
        </button>
      </nav>
      {showMobileFilters && <FiltrosMobile />}
    </header>
  );
};

export default Header;
