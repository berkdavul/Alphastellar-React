import React from "react";
import classes from "./GridForm.module.css";
import useInput from "../hooks/use-input";
import { Link } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const GridForm = (props) => {
  const {
    value: text1Value,
    isValid: text1IsValid,
    valueChangeHandler: text1ChangeHandler,
    reset: resetText1,
    hasError: text1Error,
  } = useInput(isNotEmpty);
  const {
    value: text2Value,
    isValid: text2IsValid,
    valueChangeHandler: text2ChangeHandler,
    reset: resetText2,
    hasError: text2Error,
  } = useInput(isNotEmpty);
  const {
    value: text3Value,
    isValid: text3IsValid,

    valueChangeHandler: text3ChangeHandler,

    reset: resetText3,
    hasError: text3Error,
  } = useInput(isNotEmpty);
  const {
    value: text4Value,
    isValid: text4IsValid,
    valueChangeHandler: text4ChangeHandler,
    hasError: text4Error,
    reset: resetText4,
  } = useInput(isNotEmpty);


  let formIsValid = false;

  if (text1IsValid && text2IsValid && text3IsValid && text4IsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetText1();
    resetText2();
    resetText3();
    resetText4();
  };
  const resetColor = () => {
    document.getElementById("subGridButon").style.background = " #2ccddc";
    document.getElementById("resGridButon").style.background = " #2ccddc";
    document.getElementById("subGridButons").style.background = " #2ccddc";
    document.getElementById("resGridButons").style.background = " #2ccddc";
    document.getElementById("gridHeader").style.background =
      "rgb(249, 225, 87)";
    document.getElementById("gridFooter").style.background =
      "rgb(144, 174, 114)";

    localStorage.removeItem("grid-color");
  };

  return (
    <form className={classes.formItems} onSubmit={submitHandler}>
      <div className={classes.formTitle}>TITLE</div>

      <input
        type="text"
        placeholder="TEXT FORM FILED"
        value={text1Value}
        onChange={text1ChangeHandler}
      />

      <input
        type="text"
        placeholder="TEXT FORM FILED"
        value={text2Value}
        onChange={text2ChangeHandler}
      />

      <input
        type="text"
        placeholder="TEXT FORM FILED"
        value={text3Value}
        onChange={text3ChangeHandler}
      />

      <input
        type="text"
        placeholder="TEXT FORM FILED"
        value={text4Value}
        onChange={text4ChangeHandler}
      />

      <div className={classes.btn}>
        <div className={classes.disBut}>
          <button
            disabled={!formIsValid}
            onClick={resetColor}
            id="resGridButon"
          >
            RESET
          </button>
          <button
            id="resGridButons"
            disabled={!formIsValid}
            onClick={resetColor}
          >
            BUTTON
          </button>
        </div>

        <Link to="/flex">
          <div className={classes.disBut}>
            <button
              disabled={
                !text1Error || !text2Error || !text3Error || !text4Error
              }
              id="subGridButon"
            >
              SUBMIT
            </button>
            <button
              id="subGridButons"
              disabled={
                !text1Error || !text2Error || !text3Error || !text4Error
              }
            >
              BUTTON
            </button>
          </div>
        </Link>
      </div>
    </form>
  );
};
export default GridForm;
