import styles from "./styles.module.scss";

export function Post() {
  return (
    <article className={styles.container}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/rafaelcardeallodi.png"
          />
          <div className={styles.author__info}>
            <strong>Rafael Lodi</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time dateTime="2022-06-04 18:00:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
