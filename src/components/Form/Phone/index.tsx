import { useDispatch, useSelector } from "react-redux";
import { setPhoneInput } from "../../../redux/slices/phone";
import { RootState } from "../../../redux/store";

import styles from "./Phone.module.css";

export default function PhoneForm() {
  console.log("RENDER PHONE FORM");

  const dispatch = useDispatch();

  const handelOnChangePhone = (event: any) => {
    dispatch(setPhoneInput(event.target.value));
  };

  const phoneInput = useSelector((state: RootState) => state.phone.phoneInput);

  return (
    <>
      <input
        id="phoneInput"
        className={styles.phone__form__number}
        placeholder="Phone number"
        value={phoneInput}
        type="tel"
        onChange={handelOnChangePhone}
      />
    </>
  );
}
