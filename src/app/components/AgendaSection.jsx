import React from "react";

const AgendaSection = () => {
  return (
    <section className="content-section">
      <div className="section-header">
        <i className="fa-regular fa-calendar" style={{ color: "#b01c1c" }}></i>
        <h2>Agenda Acadêmica</h2>
        <button className="reminder-btn">
          <i className="fa-regular fa-bell"></i> Configurar Lembretes
        </button>
      </div>
      <div id="Agenda" className="agenda-grid"></div>
    </section>
  );
};

export default AgendaSection;
