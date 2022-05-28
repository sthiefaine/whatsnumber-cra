import { useDispatch, useSelector } from "react-redux";
import { setPhoneInput } from "../../../redux/slices/phone";
import { RootState } from "../../../redux/store";

export default function CountryForm() {
  console.log("RENDER Country");

  const dispatch = useDispatch();

  const handelOnChangeCountry = (event: any) => {
    console.log("llll");
  };

  const phoneInput = useSelector((state: RootState) => state.phone.phoneInput);

  return (
    <>
      <label htmlFor="country-choice">Choose a flavor:</label>
      <input list="countries-list" id="country-choice" name="country-choice" />

      <datalist id="countries-list">
        <option value="Chocolate" />
        <option value="Coconut" />
        <option value="Mint" />
        <option value="Strawberry" />
        <option value="Vanilla" />
      </datalist>
    </>
  );
}
