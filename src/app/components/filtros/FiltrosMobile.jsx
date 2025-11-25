import React from "react";

// Componente responsável por exibir filtros em dispositivos mobile
const FiltrosMobile = () => {
  return (
    // Contêiner que agrupa todos os selects de filtro
    <div className="mobile-filtros">
      
      {/* Filtro para selecionar o curso */}
      <select>
        <option>Selecionar Curso</option>
        <option value="SI">Sistemas de Informação</option>
        <option value="CC">Ciência da Computação</option>
      </select>

      {/* Filtro para selecionar a turma */}
      <select>
        <option>Turma</option>
        <option value="J">J12</option>
        <option value="K">K12</option>
      </select>

      {/* Filtro para selecionar a disciplina */}
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
