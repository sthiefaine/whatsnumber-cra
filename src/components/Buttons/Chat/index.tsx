import styles from "../../Form/Form.module.css";

import { WhatsAppIcon } from "../../../icons/brands";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

import { addNumberToHistory } from "../../../redux/slices/history";

export default function ChatButton() {
  console.log("Render ChatButton");

  const dispatch = useDispatch();

  const phoneNumberValue = useSelector(
    (state: RootState) => state.phone.phoneNumber
  );

  const historyNumbers = useSelector(
    (state: RootState) => state.history.historyNumbers as any
  );

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
      {disabled && (
        <button
          disabled={disabled}
          className={styles.button}
          onClick={handleSendToHistory}
        >
          <p>Chat</p>
          <WhatsAppIcon />
        </button>
      )}
      {!disabled && (
        <a
          href={whatsappUrl}
          className="a--nostyle"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button
            disabled={disabled}
            className={styles.button}
            onClick={handleSendToHistory}
          >
            <p>Chat</p>
            <WhatsAppIcon />
          </button>{" "}
        </a>
      )}
    </>
  );
}
