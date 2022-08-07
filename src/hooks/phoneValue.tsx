import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setPhoneNumber } from "../redux/slices/phone";
import { useEffect } from "react";

export const PhoneValue = () => {
  const dispatch = useDispatch();

  const phoneInputValue = useSelector(
    (state: RootState) => state.phone.phoneInput
  );
  const countryValue = useSelector(
    (state: RootState) => state.phone.countryInfos
  );

  useEffect((): any => {
    const countryDialCodeValueFormatted = countryValue.callingCodes[0].replace(
      /[-+ ]/g,
      ""
    );

    const phoneInputValueFormatted = phoneInputValue
      .trim()
      .replace(/[-+ ]/g, "");
    if (/^\+/.test(phoneInputValue)) {
      dispatch(setPhoneNumber(phoneInputValueFormatted));
    } else {
      dispatch(
        setPhoneNumber(countryDialCodeValueFormatted + phoneInputValueFormatted)
      );
    }
  }, [phoneInputValue, countryValue, dispatch]);

  return null;
};
