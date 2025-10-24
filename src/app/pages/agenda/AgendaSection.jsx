import Styles from './agenda.module.css';
import Link from 'next/link';
import { FaRegCalendar, FaRegBell   } from "react-icons/fa";


const AgendaSection = () => {

  const eventosAgenda = [
    { id: 1, titulo: "Prova de Java", tipo: "Prova", componente: "S.I - Programação de Sistemas I", data: "09/12/2025 às 21:10" },
    { id: 2, titulo: "Trabalho de Web Mobile", tipo: "Entrega", componente: "S.I - Web Mobile", data: "15/12/2025 às 23:59" },
    { id: 3, titulo: "Seminário de S.O", tipo: "Apresentação", componente: "S.I - S.O", data: "20/12/2025 às 19:30" },
    { id: 4, titulo: "Revisão PS I", tipo: "Aula", componente: "S.I - Programação de Sistemas I", data: "05/12/2025 às 20:00" },
    { id: 5, titulo: "Lista de Exercícios", tipo: "Entrega", componente: "S.I - Cálculo", data: "12/12/2025 às 23:59" },
    { id: 6, titulo: "Prova de Algoritimos", tipo: "Prova", componente: "S.I - Algoritimos", data: "22/12/2025 às 20:40" },
  ];

  return (
    <section className={Styles.contentSection}>
      <div className={Styles.agendaHeader}>
        <div className={Styles.agendaTitle}>
          <FaRegCalendar style={{ color: "#b01c1c" }}/>
          <h2> Agenda Acadêmica</h2>
        </div>
        <div>
          <Link className={Styles.lembreteButton} href="/"><FaRegBell  />Configurar lembretes</Link>
        </div>
      </div>
      <div id={Styles.agenda} className={Styles.agendaGrid}>
        {eventosAgenda.map((evento, index) => (
          <article key={index} className={Styles.agendaCard}>
            <div className={Styles.cardContent}>
              
              <div className={Styles.cardHeader}>
                <h3 className={Styles.cardTitle}>{evento.titulo}</h3>
                <span 
                  className={Styles.cardTipo} 
                >
                  {evento.tipo}
                </span>
              </div>
              
              <p className={Styles.cardComponente}>{evento.componente}</p>
              
              <span className={Styles.cardData}>{evento.data}</span>
            </div>
            <div className={Styles.cardActions}>
              <button className={Styles.cardButton}>
                <FaRegBell /><span>Lembrete</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AgendaSection;
