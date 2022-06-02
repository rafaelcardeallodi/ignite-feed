import styles from "./styles.module.scss";

import igniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
