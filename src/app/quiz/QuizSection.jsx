import React from 'react'

// Importa o módulo CSS específico do componente
import Styles from './quiz.module.css';

// Importa Link do Next.js para navegação
import Link from 'next/link';

// Ícones usados no layout
import { FaRegClock, FaPlus , FaRegFolder  } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function QuizSection() {

  // Lista das pastas/tópicos de quiz
  const PastasQuiz = [
    {id: 1, title: 'Matemática', description: 'Álgebra, Geometria, Cálculo', link: '/quiz/1', colorIcon: '#2222fa', colorBg: 'rgba(34, 34, 250, 0.1)' , quizConts: 10},
    {id: 2, title: 'Programação', description: 'Java, Python, JavaScript', link: '/quiz/2', colorIcon: '#b01c1c', colorBg: 'rgba(176, 28, 28, 0.1)' , quizConts: 18},
    {id: 3, title: 'História', description: 'Idade Antiga, Média e Moderna', link: '/quiz/3', colorIcon: '#1cb054', colorBg: 'rgba(28, 176, 84, 0.1)' , quizConts: 12},
    {id: 4, title: 'Biologia', description: 'Genética, Ecologia, Zoologia', link: '/quiz/4', colorIcon: '#fa9222', colorBg: 'rgba(250, 146, 34, 0.1)' , quizConts: 15},
    {id: 5, title: 'Química', description: 'Orgânica, Inorgânica, Físico-Química', link: '/quiz/5', colorIcon: '#9b22fa', colorBg: 'rgba(155, 34, 250, 0.1)' , quizConts: 8},
    {id: 6, title: 'Física', description: 'Mecânica, Termodinâmica, Óptica', link: '/quiz/6', colorIcon: '#fa2272', colorBg: 'rgba(250, 34, 114, 0.1)' , quizConts: 20},
  ]

  return (
    <section className={Styles.quizSection}>

      {/* Cabeçalho da seção */}
      <div className={Styles.quizHeader}>
        <div className={Styles.quizTitle}>
          <FaRegClock style={{ color: "#b01c1c" }}/>
          <h2> Quiz </h2>
        </div>

        {/* Botão para criar novo tópico */}
        <div>
          <Link className={Styles.lembreteButton} href="/"><FaPlus />Criar novo tópico</Link>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className={Styles.quizContent}>
        <div className={Styles.quizContainer}>
        
          {/* Renderização das pastas de quiz */}
          {PastasQuiz.map((quiz) => (
            
            <Link key={quiz.id} href={quiz.link} className={Styles.quizCard}>
              
              {/* Cabeçalho do card */}
              <div className={Styles.cardHeader}>
                <div className={Styles.folder} style={{background: quiz.colorBg}}>
                  <FaRegFolder style={{color: quiz.colorIcon}}/>
                </div>
                <span><IoIosArrowForward/></span>
              </div>

              {/* Ícone do quiz (não está sendo usado diretamente) */}
              <div className={Styles.quizIcon}>
                <i className={quiz.icon} style={{color: quiz.color}}></i>
              </div>

              {/* Informações do card */}
              <div className={Styles.quizInfo}>
                <h3 className={Styles.quizTitle}>{quiz.title}</h3>
                <p className={Styles.quizDescription}>{quiz.description}</p>
                <span className={Styles.quizCount}>
                  <FaRegClock/> {quiz.quizConts} Perguntas
                </span>
              </div>

            </Link>

          ))}
        </div>
      </div>

    </section>
  )
}

export default QuizSection
