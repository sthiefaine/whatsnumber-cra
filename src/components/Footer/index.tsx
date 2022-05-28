import styles from "../../styles/Home.module.css";

import { HomeIcon, HistoryIcon, SettingIcon } from "../../icons/navigation";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer + " mobile"}>
        <nav className={styles.footer__nav}>
          <div className={styles.footer__nav__items}>
            <a href="/" className={styles.footer__nav__item}>
              <HomeIcon />
            </a>

            <a href="/history" className={styles.footer__nav__item}>
              <HistoryIcon />
            </a>

            <a href="/" className={styles.footer__nav__item}>
              <SettingIcon />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
