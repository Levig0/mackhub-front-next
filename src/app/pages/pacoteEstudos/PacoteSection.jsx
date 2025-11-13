import React from "react";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";


import Link from "next/link";
import Styles from './pacoteEstudos.module.css';

const PacoteSection = () => {
  const PacoteEstudos = [
    { id: 1, titulo: "Algebra Linear - Capitulo 1", descricao: "20 páginas", link: "/pacote/1", status: true },
    { id: 2, titulo: "Cálculo Diferencial - Capitulo 2", descricao: "15 páginas", link: "/pacote/2", status: false },
    { id: 3, titulo: "Física Moderna - Capitulo 3", descricao: "30 páginas", link: "/pacote/3", status: true },
    { id: 4, titulo: "Química Orgânica - Capitulo 4", descricao: "25 páginas", link: "/pacote/4", status: false },
    { id: 5, titulo: "Programação em Python - Capitulo 5", descricao: "40 páginas", link: "/pacote/5", status: true },
  ];

  const totalItens = PacoteEstudos.length;
  const itensConcluidos = PacoteEstudos.filter(pacote => pacote.status).length;
  const porcentagemProgresso = totalItens > 0 ? Math.round((itensConcluidos / totalItens) * 100) : 0;

  return (
    <section className={Styles.contentSection}>
      <div className={Styles.tituloContainer}>
        <i className="fa-regular fa-file-lines" style={{ color: "#b01c1c" }}></i>
        <h2>Pacote de estudos</h2>
      </div>

      <div className={Styles.progressBarWrapper}>
        <div className={Styles.progressHeader}>
          <span>Progresso: {itensConcluidos} de {totalItens}</span>
          <span>{porcentagemProgresso}%</span>
        </div>
        <div className={Styles.progressBar}>
          <div
            className={Styles.progressFill}
            style={{ width: `${porcentagemProgresso}%` }}
            aria-valuenow={porcentagemProgresso}
            aria-valuemin="0"
            aria-valuemax="100"
            role="progressbar"
          ></div>
        </div>
      </div>

      <div className={Styles.PacoteEstudosContainer}>
        {PacoteEstudos.map((pacote) => (
          <Link key={pacote.id} href={pacote.link} className={Styles.pacoteCard}>
            <div className={Styles.pacoteDetails}>
              <div className={Styles.pacoteIcon}>
                <i className="fa-regular fa-file-lines" style={{ color: "#b01c1c", fontSize: "24px" }}><IoDocumentTextOutline color="#fff" /></i>
              </div>
              <div className={Styles.pacoteInfo}>
                <h3 className={Styles.pacoteTitle}>{pacote.titulo}</h3>
                <p className={Styles.pacoteDescription}>{pacote.descricao}</p>
              </div>
            </div>

            <div className={Styles.pacoteStatus}>
              {pacote.status ? (
                <span className={Styles.statusCompleted}><IoMdCheckmarkCircleOutline color="#00FF00" size="24" /></span>
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