"use client";
import { useEffect, useState } from "react";
import Styles from "./userProfile.module.css";

const UserProfile = () => {
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const [course, setCourse] = useState("");

  const courses = [
    { sigla: "S.I 💻", nome: "Sistemas da informação" },
    { sigla: "C.C 💻", nome: "Ciência da computação" },
  ];

  function pickRandomCourse() {
    const random = courses[Math.floor(Math.random() * courses.length)];
    return random.sigla; 
  }


  async function fetchAvatar() {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();

      const url = data.results[0].picture.large;
      const email = data.results[0].email;
      const first = data.results[0].name.first;
      const last = data.results[0].name.last;

      setAvatar(url);
      setEmail(email);
      setFirst(first);
      setLast(last);

      setCourse(pickRandomCourse());

    } catch (error) {
      console.error("Erro ao carregar avatar:", error);
    }
  }

  useEffect(() => {
    fetchAvatar();

    const interval = setInterval(() => {
      fetchAvatar();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={Styles.userProfile}>
      <img
        className={Styles.avatar}
        src={avatar || null}
        alt="Avatar"
      />
      <div className={Styles.userProfileText}>
        <h3>{first} {last}</h3>
        <p>{email}</p>
        <p>Cursando {course}</p>
      </div>
    </section>
  );
};

export default UserProfile;
