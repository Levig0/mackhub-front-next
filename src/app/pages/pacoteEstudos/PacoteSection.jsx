import React from "react";

import Styles from './pacoteEstudos.module.css';

const PacoteSection = () => (
  <section className={Styles.contentSection}>
    <div className={Styles.contentSection}>
      <i className="fa-regular fa-file-lines" style={{ color: "#b01c1c" }}></i>
      <h2>Pacote de estudos</h2>
    </div>
    <div className={Styles.placeHolder}>Em breve</div>
  </section>
);

export default PacoteSection;
 