import styles from "./Form.module.css";
import Dropdown from "./Dropdown";
import PhoneForm from "./Phone";

import ChatButton from "../Buttons/Chat";
import CopyButton from "../Buttons/Copy";

export default function Form() {
  console.log("Render Form");

  return (
    <>
      <div className={styles.phone__form}>
        <Dropdown />

        <PhoneForm />
      </div>

      <div className={styles.button__container}>
        <ChatButton />
        <CopyButton />
      </div>
    </>
  );
}
