import React from "react";

// Componente responsável por exibir os filtros no layout mobile
const FiltrosMobile = () => {
  return (
    // Contêiner principal dos filtros na versão mobile
    <div className="mobile-filtros">

      {/* Filtro para seleção de curso */}
      <select>
        <option>Selecionar Curso</option>
        <option value="SI">Sistemas de Informação</option>
        <option value="CC">Ciência da Computação</option>
      </select>

      {/* Filtro para seleção de turma */}
      <select>
        <option>Turma</option>
        <option value="J">J12</option>
        <option value="K">K12</option>
      </select>

      {/* Filtro para seleção de disciplina */}
      <select>
        <option>Disciplina</option>
        <option value="WM">Web Mobile</option>
        <option value="PS">Programação de Sistemas I</option>
        <option value="SO">Sistemas Operacionais</option>
        <option value="AL">Algoritmos</option>
        <option value="CA">Cálculo</option>
      </select>
    </div>
  );
};

export default FiltrosMobile;

