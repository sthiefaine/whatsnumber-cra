import { useState, useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "../../../redux/slices/phone";
import { RootState } from "../../../redux/store";

import countriesList from "../../../data/country-calling-codes.json";

import { useOnClickOutside } from "../../../hooks/general";
const Dropdown = () => {
  console.log("Render Dropdown");

  const dispatch = useDispatch();

  const countryInfos = useSelector(
    (state: RootState) => state.phone.countryInfos
  );

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setOpen(false));

  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      const navLangCode =
        window.navigator.language.substring(3, 5) ||
        window.navigator.language.substring(0, 2);
      const defaultCountry = countriesList.find(
        (element) => element.alpha2Code === navLangCode.toUpperCase()
      );

      defaultCountry && dispatch(setCountry(defaultCountry));

      setFirstRender(false);
    }
  }, []);

  function toggle() {
    setOpen(!open);
  }

  function selectOption(option: any) {
    dispatch(setCountry(option));
    setOpen(false);
  }

  return (
    <div className="dropdown">
      <div className="control">
        <div id="input-container" className="selected-value" ref={ref}>
          <button
            className="phone__form__country"
            onClick={toggle}
            style={{
              backgroundImage:
                "url(./image/flags/" +
                countryInfos.alpha2Code.toLowerCase() +
                ".svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "10px 50%",
              paddingLeft: "20px",
              backgroundSize: "35px",
            }}
          >
            {"+" + countryInfos.callingCodes[0] || ""}
          </button>
        </div>
        <div className={`arrow ${open ? "open" : ""}`} />
      </div>
      <div className={`options ${open ? "open" : ""}`}>
        {countriesList.map((option) => (
          <div
            key={option.alpha3Code}
            className={`option ${
              countryInfos.alpha2Code === option.alpha2Code ? "selected" : null
            }`}
            onClick={() => selectOption(option)}
          >
            <img
              src={`/image/flags/${option.alpha2Code.toLowerCase()}.svg`}
              width="30px"
              height="30px"
              alt={option.name}
            />
            <span>+{option.callingCodes[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
