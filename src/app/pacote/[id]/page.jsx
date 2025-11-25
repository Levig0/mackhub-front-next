// Importa os estilos da página
import Styles from "./page.module.css";

// Importa o ícone de documento da biblioteca react-icons
import { IoDocumentTextOutline } from "react-icons/io5";

// Objeto que contém todos os pacotes/capítulos disponíveis
const pacotes = {
  1: {
    titulo: "Álgebra Linear - Capítulo 1",
    descricao: "Introdução aos vetores, matrizes e operações fundamentais.",
    conteudo: [
      "O que são vetores",
      "Operações com vetores",
      "Matrizes e determinantes",
      "Espaços vetoriais",
    ],
    paginas: 20,
  },
  2: {
    titulo: "Cálculo Diferencial - Capítulo 2",
    descricao: "Limites, continuidade e primeiras derivadas.",
    conteudo: [
      "Definição de limite",
      "Regras de derivação",
      "Funções contínuas",
      "Derivadas aplicadas",
    ],
    paginas: 15,
  },
  3: {
    titulo: "Física Moderna - Capítulo 3",
    descricao: "Estudo sobre relatividade, fótons e partículas.",
    conteudo: [
      "Teoria da Relatividade",
      "Dualidade onda-partícula",
      "Experimento da fenda dupla",
      "Energia e massa",
    ],
    paginas: 30,
  },
  4: {
    titulo: "Química Orgânica - Capítulo 4",
    descricao: "Hidrocarbonetos, cadeias carbônicas e funções orgânicas.",
    conteudo: [
      "Estruturas de carbono",
      "Isomeria",
      "Funções orgânicas",
      "Reações orgânicas",
    ],
    paginas: 25,
  },
  5: {
    titulo: "Programação em Python - Capítulo 5",
    descricao: "Sintaxe básica, estruturas de repetição e funções.",
    conteudo: [
      "Variáveis e tipos",
      "Estruturas condicionais",
      "Loops",
      "Funções e módulos",
    ],
    paginas: 40,
  },
};

// Página dinâmica que recebe o parâmetro `id` vindo da rota
export default function PacotePage({ params }) {
  const { id } = params; // Extrai o id da rota
  const pacote = pacotes[id]; // Busca o pacote correspondente pelo id

  // Caso o pacote não exista, retorna uma mensagem
  if (!pacote) {
    return <h1 style={{ padding: "20px" }}>Pacote não encontrado.</h1>;
  }

  // Renderização da página do pacote
  return (
    <div className={Styles.container}>
      
      {/* Cabeçalho da página */}
      <header className={Styles.header}>
        <div className={Styles.icon}>
          <IoDocumentTextOutline size={32} color="#b01c1c" />
        </div>
        <h1>{pacote.titulo}</h1> 
        <p>{pacote.descricao}</p>
      </header>

      {/* Box com informações gerais do capítulo */}
      <section className={Styles.infoBox}>
        <h2>📘 Informações do capítulo</h2>
        <ul>
          <li><strong>Páginas:</strong> {pacote.paginas}</li>
          <li><strong>Nível:</strong> Intermediário</li>
          <li><strong>Status:</strong> Em andamento</li>
        </ul>
      </section>

      {/* Box com o conteúdo listado */}
      <section className={Styles.contentBox}>
        <h2>📚 Conteúdo abordado</h2>
        <ul>
          {pacote.conteudo.map((item, index) => (
            <li key={index}>• {item}</li> // Renderiza cada item do conteúdo
          ))}
        </ul>
      </section>

      {/* Seção de download */}
      <section className={Styles.downloadBox}>
        <h2>📄 Baixar capítulo</h2>
        <button className={Styles.downloadBtn}>
          Baixar PDF
        </button>
      </section>

    </div>
  );
}
