import React from "react";

import Styles from './agenda.module.css';
import Button from "@/app/components/button/Button";

const AgendaSection = () => {
  return (
    <section className={Styles.contentSection}>
      <div className={Styles.sectionHeader}>
        <i className="fa-regular fa-calendar" style={{ color: "#b01c1c" }}></i>
        <h2>Agenda Acadêmica</h2>
      <Button/>
      </div>
      <div id={Styles.agenda} className={Styles.agendaGrid}></div>
    </section>
  );
};

export default AgendaSection;
