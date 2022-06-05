import styles from "../../styles/History.module.css";

import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import SearchBar from "../../components/SearchBar";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ListHistory from "../../components/Lists/history";
import { resetHistory } from "../../redux/slices/history";

const History = () => {
  console.log("render History");

  const historyNumbers = useSelector(
    (state: RootState) => state.history.historyNumbers
  );

  const dispatch = useDispatch();

  const handleResetHistory = () => {
    localStorage.removeItem("whatsNumber");
    dispatch(resetHistory());
  };

  return (
    <>
      <>
        <Aside />
        <div className={styles.container}>
          <Header />
          <main className={styles.main}>
            {historyNumbers.length === 0 && (
              <>
                <div className={styles.button__container}>Historique vide.</div>
                <img
                  className={styles.img__empty}
                  src={`/image/Empty-amico.svg`}
                  width="150px"
                  height="150px"
                  alt="Empty svg"
                />
              </>
            )}
            {historyNumbers.length > 0 && (
              <>
                <SearchBar />
                <button onClick={() => handleResetHistory()}>
                  RESET HISTORY
                </button>
                <article className={styles.main__article}>
                  <ListHistory />
                </article>
              </>
            )}
          </main>
          <Footer />
        </div>
      </>
    </>
  );
};
export default History;
