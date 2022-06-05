import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./styles.module.scss";

export function Comment() {
  return (
    <div className={styles.container}>
      <img src="https://github.com/rafaelcardeallodi.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Lodi</strong>
              <time dateTime="2022-06-04 18:00:00">Comentado há 1h</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
