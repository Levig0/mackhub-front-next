import React, { useState } from "react";

import Styles from './simulador.module.css';
import { CiCalculator1 } from "react-icons/ci";


const SimuladorSection = () => {
  const [resultado, setResultado] = useState(null);

  const calcularNota = (e) => {
    e.preventDefault();
    const n1 = parseFloat(e.target.n1.value);
    const p1 = parseFloat(e.target.p1.value);
    const n2 = parseFloat(e.target.n2.value);
    const p2 = parseFloat(e.target.p2.value);

    const totalPeso = p1 + p2;
    const media = (n1 * p1 + n2 * p2) / totalPeso;

    setResultado(`Média ponderada: ${media.toFixed(2)}`);
  };

  return (
    <section className={Styles.contentSection}>
      <div className={Styles.sectionHeader}>
        <i className="fa-solid fa-calculator" style={{ color: "#b01c1c" }}><CiCalculator1 /></i>
        <h2>Simulador de nota</h2>
      </div>
      <form onSubmit={calcularNota} className={Styles.simuladorForm}>
        <input name="n1" type="number" step="0.01" placeholder="Nota 1" />
        <input name="p1" type="number" step="0.01" placeholder="Peso 1" />
        <input name="n2" type="number" step="0.01" placeholder="Nota 2" />
        <input name="p2" type="number" step="0.01" placeholder="Peso 2" />
        <button type="submit">Calcular</button>
      </form>
      {resultado && <div className={Styles.resultado}>{resultado}</div>}
    </section>
  );
};

export default SimuladorSection;
