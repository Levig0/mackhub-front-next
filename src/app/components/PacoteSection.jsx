import React from "react";

// Componente de seção do Pacote de Estudos
const PacoteSection = () => (
  <section className="content-section">
    {/* Cabeçalho da seção */}
    <div className="section-header">
      {/* Ícone da seção */}
      <i className="fa-regular fa-file-lines" style={{ color: "#b01c1c" }}></i>

      {/* Título da seção */}
      <h2>Pacote de estudos</h2>
    </div>

    {/* Conteúdo placeholder indicando função futura */}
    <div className="placeholder-box">Em breve</div>
  </section>
);

export default PacoteSection;

 