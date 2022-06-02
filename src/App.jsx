import { Header } from "./components/Header";
import "./styles/global.scss";

import styles from "./App.module.scss";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>posts</main>
      </div>
    </>
  );
}
