import styles from "../../Form/Form.module.css";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";

import { addNumberToHistory } from "../../../redux/slices/history";

export default function CopyButton() {
  console.log("Render CopyButton");

  const dispatch = useDispatch();

  const phoneNumberValue = useSelector(
    (state: RootState) => state.phone.phoneNumber
  );

  const historyNumbers = useSelector(
    (state: RootState) => state.history.historyNumbers as any
  );

  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    handleSendToHistory();
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  const handleSendToHistory = () => {
    if (
      historyNumbers.slice(-1)?.[0]?.number !== phoneNumberValue ||
      historyNumbers.length === 0
    ) {
      return dispatch(addNumberToHistory(phoneNumberValue));
    }
  };

  const whatsappUrl = "https://wa.me/" + phoneNumberValue;
  const disabled = phoneNumberValue.length >= 8 ? false : true;

  return (
    <>
      <CopyToClipboard text={whatsappUrl} onCopy={() => handleCopy()}>
        <button className={styles.button} disabled={disabled}>
          <p>{copy ? "Copied 🎉" : `Copy Link ⧉`}</p>
        </button>
      </CopyToClipboard>
    </>
  );
}
