import React, { useState } from "react";

const SimuladorSection = () => {
  // Estado que armazena o resultado da média calculada
  const [resultado, setResultado] = useState(null);

  // Função chamada ao enviar o formulário
  const calcularNota = (e) => {
    e.preventDefault(); // evita recarregar a página
    
    // Coleta e converte os valores numéricos dos inputs
    const n1 = parseFloat(e.target.n1.value);
    const p1 = parseFloat(e.target.p1.value);
    const n2 = parseFloat(e.target.n2.value);
    const p2 = parseFloat(e.target.p2.value);

    // Soma dos pesos
    const totalPeso = p1 + p2;

    // Cálculo da média ponderada
    const media = (n1 * p1 + n2 * p2) / totalPeso;

    // Armazena o resultado formatado
    setResultado(`Média ponderada: ${media.toFixed(2)}`);
  };

  return (
    <section className="content-section">
      {/* Cabeçalho da seção com ícone e título */}
      <div className="section-header">
        <i className="fa-solid fa-calculator" style={{ color: "#b01c1c" }}></i>
        <h2>Simulador de nota</h2>
      </div>

      {/* Formulário que recebe notas e pesos */}
      <form onSubmit={calcularNota} className="simulador-form">
        <input name="n1" type="number" step="0.01" placeholder="Nota 1" />
        <input name="p1" type="number" step="0.01" placeholder="Peso 1" />
        <input name="n2" type="number" step="0.01" placeholder="Nota 2" />
        <input name="p2" type="number" step="0.01" placeholder="Peso 2" />
        <button type="submit">Calcular</button>
      </form>

      {/* Exibe o resultado caso exista */}
      {resultado && <div className="resultado">{resultado}</div>}
    </section>
  );
};

export default SimuladorSection;
