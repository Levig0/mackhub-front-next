import React, { useState } from "react";
import Image from "next/image";
import FiltrosMobile from "../filtros/FiltrosMobile";

// Importa o módulo CSS específico do header
import Styles from './header.module.css';

const Header = () => {
  // Estado que controla se os filtros mobile estão visíveis ou não
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Função que alterna a visibilidade dos filtros mobile
  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    // Header principal com estilo aplicado pelo CSS module
    <header className={Styles.header}>
      
      {/* Barra de navegação do topo */}
      <nav className={Styles.navbar}>

        {/* Área do logo + nome do app */}
        <div className={Styles.logo}>
          {/* Logo carregado com otimização nativa do Next.js */}
          <Image src="/SVG.png" alt="MackHub logo" width={40} height={50} />
          <span>MackHub</span>
        </div>

        {/* Filtros do desktop (visíveis apenas em telas maiores via CSS) */}
        <form className={Styles.filtros}>

          {/* Select do Curso */}
          <select className={Styles.select}>
            <option>Selecionar Curso</option>
            <option value="SI">Sistemas de Informação</option>
            <option value="CC">Ciência da Computação</option>
          </select>

          {/* Select da Turma */}
          <select className={Styles.select}>
            <option>Turma</option>
            <option value="J">J12</option>
            <option value="K">K12</option>
          </select>

          {/* Select da Disciplina */}
          <select className={Styles.select}>
            <option>Disciplina</option>
            <option value="WM">Web Mobile</option>
            <option value="PS">Programação de Sistemas I</option>
            <option value="SO">Sistemas Operacionais</option>
            <option value="AL">Algoritmos</option>
            <option value="CA">Cálculo</option>
          </select>
        </form>

        {/* Botão que aparece no mobile para abrir os filtros */}
        <button className={Styles.mobileToggle} onClick={toggleMobileFilters}>
          <i className="fa-solid fa-sliders"></i>
        </button>
      </nav>

      {/* Renderiza os filtros mobile somente quando o usuário clicar no botão */}
      {showMobileFilters && <FiltrosMobile />}
    </header>
  );
};

export default Header;
