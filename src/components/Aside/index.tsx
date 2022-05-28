import styles from "../../styles/Home.module.css";

import { HomeIcon, HistoryIcon, SettingIcon } from "../../icons/navigation";
const Aside = () => {
  return (
    <>
      <div className={styles.aside + " desktop"}>
        <nav className={styles.aside__nav}>
          <ul className={styles.aside__nav__items}>
            <li className={styles.aside__nav__item}>
              <a href="/" className="">
                <HomeIcon /> <span>Home</span>
              </a>
            </li>
            <li className={styles.aside__nav__item}>
              <a href="/history" className="">
                <HistoryIcon /> <span>History</span>
              </a>
            </li>
            <li className={styles.aside__nav__item}>
              <a href="/" className="">
                <SettingIcon />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Aside;
