import { format } from "date-fns";

import styles from "../../../styles/ListHistory.module.css";

import {
  ShareIcon,
  AddIcon,
  AddContactIcon,
  TrashIcon,
  Edit2Icon,
} from "../../../icons/options";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ListHistory = () => {
  console.log("render  ListHistory");

  const historyNumbers = useSelector(
    (state: RootState) => state.history.historyNumbers
  );

  return (
    <ul className={styles.element}>
      {historyNumbers.map((element: any, i) => {
        return (
          <li className={styles.elements} key={element.id}>
            <div className={styles.elements__informations}>
              <p
                className={`
                  ${styles.elements__information}
                  ${styles.elements__information__title}
                `}
              >
                {element.number}
              </p>
              <p className={styles.elements__information}>
                {format(element.date, "dd/MM/yyyy HH:mm")}
              </p>
            </div>
            <div className={styles.elements__actions}>
              <span className={styles.elements__action}>
                <ShareIcon />
              </span>
              <span className={styles.elements__action}>
                <Edit2Icon />
              </span>
              <span className={styles.elements__action}>
                <TrashIcon />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default ListHistory;
