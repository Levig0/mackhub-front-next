import React from "react";

const AgendaSection = () => {
  return (
    // Seção principal que envolve toda a parte da agenda
    <section className="content-section">
      
      {/* Cabeçalho da seção: ícone, título e botão */}
      <div className="section-header">

        {/* Ícone de calendário usando Font Awesome, com cor personalizada */}
        <i className="fa-regular fa-calendar" style={{ color: "#b01c1c" }}></i>

        {/* Título da seção */}
        <h2>Agenda Acadêmica</h2>

        {/* Botão para configurar lembretes, com ícone de sino */}
        <button className="reminder-btn">
          <i className="fa-regular fa-bell"></i> Configurar Lembretes
        </button>
      </div>

      {/* Grid onde os itens da agenda serão renderizados dinamicamente */}
      <div id="Agenda" className="agenda-grid"></div>
    </section>
  );
};

export default AgendaSection;

