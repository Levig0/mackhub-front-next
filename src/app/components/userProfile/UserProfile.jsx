"use client"; // Indica que este componente será renderizado no cliente (Next.js)

import { useEffect, useState } from "react"; // Hooks do React
import Styles from "./userProfile.module.css"; // Importa o CSS Module do componente

const UserProfile = () => {
  // Estados para armazenar os dados do usuário vindo da API
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const [course, setCourse] = useState(""); // Estado do curso aleatório

  // Lista de cursos possíveis, com sigla e nome
  const courses = [
    { sigla: "S.I 💻", nome: "Sistemas da informação" },
    { sigla: "C.C 💻", nome: "Ciência da computação" },
  ];

  // Escolhe um curso aleatório da lista
  function pickRandomCourse() {
    const random = courses[Math.floor(Math.random() * courses.length)];
    return random.sigla; 
  }

  // Função assíncrona para buscar dados de um usuário aleatório da API
  async function fetchAvatar() {
    try {
      const res = await fetch("https://randomuser.me/api/"); // Requisição da API
      const data = await res.json(); // Converte para JSON

      // Extrai os dados necessários
      const url = data.results[0].picture.large;
      const email = data.results[0].email;
      const first = data.results[0].name.first;
      const last = data.results[0].name.last;

      // Atualiza os estados com os valores obtidos
      setAvatar(url);
      setEmail(email);
      setFirst(first);
      setLast(last);

      // Define aleatoriamente um curso
      setCourse(pickRandomCourse());

    } catch (error) {
      // Caso ocorra erro na API
      console.error("Erro ao carregar avatar:", error);
    }
  }

  // Executa ao montar o componente
  useEffect(() => {
    fetchAvatar(); // Carrega os dados pela primeira vez

    // Atualiza o usuário automaticamente a cada 5 segundos
    const interval = setInterval(() => {
      fetchAvatar();
    }, 5000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={Styles.userProfile}> {/* Container principal */}
      <img
        className={Styles.avatar} // Estilo do avatar
        src={avatar || null} // Se avatar estiver vazio, usa null
        alt="Avatar"
      />
      <div className={Styles.userProfileText}> {/* Informações do usuário */}
        <h3>{first} {last}</h3> {/* Nome do usuário */}
        <p>{email}</p> {/* Email */}
        <p>Cursando {course}</p> {/* Curso aleatório */}
      </div>
    </section>
  );
};

export default UserProfile; // Exporta o componente

