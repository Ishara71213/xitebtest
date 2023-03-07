import "./InputField.css";
import { useState } from "react";

export const InputField = (props) => {
  const {
    label,
    id,
    onChangeInputHandler,
    errorMessage,
    inputType,
    ...inputProps
  } = props;
  const [focused, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className="inputField-container">
      {label && <label className="inputField-label">{label}</label>}
      <input
        className={`inputField ${inputType}`}
        id={id}
        {...inputProps}
        onChange={onChangeInputHandler}
        onBlur={handleFocus} //to toggle on of error msg
        onFocus={() => {
          inputProps.name === "password_confirmation" && setFocus(true);
        }}
        focused={focused.toString()}
      />
      <span className="inputError">{errorMessage}</span>
    </div>
  );
};
