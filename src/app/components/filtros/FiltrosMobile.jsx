import React from "react";

const FiltrosMobile = () => {
  return (
    <div className="mobile-filtros">
      <select>
        <option>Selecionar Curso</option>
        <option value="SI">Sistemas de Informação</option>
        <option value="CC">Ciência da Computação</option>
      </select>
      <select>
        <option>Turma</option>
        <option value="J">J12</option>
        <option value="K">K12</option>
      </select>
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
