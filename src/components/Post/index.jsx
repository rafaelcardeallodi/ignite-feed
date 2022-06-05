import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.scss";

export function Post() {
  return (
    <article className={styles.container}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/rafaelcardeallodi.png" />
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

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
