import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header + " mobile"}>
        <div className={styles.logo + " " + styles.headerElement}>L</div>
        <button className={styles.headerElement}>☀️</button>
      </header>
    </>
  );
};

export default Header;
