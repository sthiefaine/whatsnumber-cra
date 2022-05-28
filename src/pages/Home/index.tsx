import styles from "../../styles/Home.module.css";

import Form from "../../components/Form";
import Aside from "../../components/Aside";
import Header from "../../components/Header";

import Footer from "../../components/Footer";

import { PhoneValue } from "../../hooks/phoneValue";

const Home = () => {
  console.log("render HOME");

  return (
    <>
      <PhoneValue />
      <>
        <Aside />
        <div className={styles.container}>
          <Header />
          <main className={styles.main}>
            <article className={styles.main__article}>
              <Form />
            </article>
          </main>
          <Footer />
        </div>
      </>
    </>
  );
};
export default Home;
