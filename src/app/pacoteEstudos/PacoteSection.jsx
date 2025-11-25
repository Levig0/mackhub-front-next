import React from "react"; 
// Importa a biblioteca React para criar componentes

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// Ícone de check concluído

import { IoDocumentTextOutline } from "react-icons/io5";
// Ícone de documento

import Link from "next/link";
// Componente de navegação do Next.js

import Styles from './pacoteEstudos.module.css';
// Importa o CSS module para estilização isolada

const PacoteSection = () => {
  // Dados dos pacotes de estudo
  const PacoteEstudos = [
    { id: 1, titulo: "Algebra Linear - Capitulo 1", descricao: "20 páginas", link: "/pacote/1", status: true },
    { id: 2, titulo: "Cálculo Diferencial - Capitulo 2", descricao: "15 páginas", link: "/pacote/2", status: false },
    { id: 3, titulo: "Física Moderna - Capitulo 3", descricao: "30 páginas", link: "/pacote/3", status: true },
    { id: 4, titulo: "Química Orgânica - Capitulo 4", descricao: "25 páginas", link: "/pacote/4", status: false },
    { id: 5, titulo: "Programação em Python - Capitulo 5", descricao: "40 páginas", link: "/pacote/5", status: true },
  ];

  // Total de itens
  const totalItens = PacoteEstudos.length;

  // Quantos foram concluídos
  const itensConcluidos = PacoteEstudos.filter(pacote => pacote.status).length;

  // Cálculo da porcentagem de progresso
  const porcentagemProgresso = totalItens > 0 ? Math.round((itensConcluidos / totalItens) * 100) : 0;

  return (
    <section className={Styles.contentSection}>
      {/* Título da seção */}
      <div className={Styles.tituloContainer}>
        <i className="fa-regular fa-file-lines" style={{ color: "#b01c1c" }}></i>
        <h2>Pacote de estudos</h2>
      </div>

      {/* Barra de progresso */}
      <div className={Styles.progressBarWrapper}>
        <div className={Styles.progressHeader}>
          {/* Texto mostrando itens concluídos */}
          <span>Progresso: {itensConcluidos} de {totalItens}</span>
          {/* Porcentagem convertida */}
          <span>{porcentagemProgresso}%</span>
        </div>

        {/* Barra base */}
        <div className={Styles.progressBar}>
          {/* Parte preenchida da barra */}
          <div
            className={Styles.progressFill}
            style={{ width: `${porcentagemProgresso}%` }} // Define visualmente o progresso
            aria-valuenow={porcentagemProgresso}
            aria-valuemin="0"
            aria-valuemax="100"
            role="progressbar"
          ></div>
        </div>
      </div>

      {/* Lista de pacotes */}
      <div className={Styles.PacoteEstudosContainer}>
        {PacoteEstudos.map((pacote) => (
          <Link key={pacote.id} href={pacote.link} className={Styles.pacoteCard}>
            
            {/* Informações principais do pacote */}
            <div className={Styles.pacoteDetails}>

              {/* Ícone dentro do card */}
              <div className={Styles.pacoteIcon}>
                <i className="fa-regular fa-file-lines" style={{ color: "#b01c1c", fontSize: "24px" }}>
                  <IoDocumentTextOutline color="#fff" />
                </i>
              </div>

              {/* Título + descrição */}
              <div className={Styles.pacoteInfo}>
                <h3 className={Styles.pacoteTitle}>{pacote.titulo}</h3>
                <p className={Styles.pacoteDescription}>{pacote.descricao}</p>
              </div>
            </div>

            {/* Status do pacote (concluído ou pendente) */}
            <div className={Styles.pacoteStatus}>
              {pacote.status ? (
                <span className={Styles.statusCompleted}>
                  <IoMdCheckmarkCircleOutline color="#00FF00" size="24" />
                </span>
              ) : (
                <span className={Styles.statusPending}></span>
              )}
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default PacoteSection;
// Exporta o componente para uso externo
