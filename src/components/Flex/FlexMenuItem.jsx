import classes from "./FlexMenuItem.module.css";
import React, { useEffect } from "react";
const FlexMenuItem = () => {
  const changeColor = (e) => {
    if (e.target?.id) {
      document.getElementById("resFlexButon").style.background = e.target.id;
      document.getElementById("subFlexButon").style.background = e.target.id;
      document.getElementById("resFlexButons").style.background = e.target.id;
      document.getElementById("subFlexButons").style.background = e.target.id;
      document.getElementById("flexHeader").style.background = e.target.id;
      document.getElementById("flexFooter").style.background = e.target.id;

      localStorage.setItem("flex-color", JSON.stringify(e.target.id));
    }
    if (e) {
      document.getElementById("resFlexButon").style.background = e;
      document.getElementById("subFlexButon").style.background = e;
      document.getElementById("resFlexButons").style.background = e;
      document.getElementById("subFlexButons").style.background = e;
      document.getElementById("flexHeader").style.background = e;
      document.getElementById("flexFooter").style.background = e;
    }
  };

  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem("flex-color"));
    if (colors) changeColor(colors);
  }, []);

  return (
    <div className={classes.menuItem}>
      <div id="gold" onClick={changeColor}>
        MENU ITEM
      </div>
      <div id="green" onClick={changeColor}>
        MENU ITEM
      </div>
      <div id="red" onClick={changeColor}>
        MENU ITEM
      </div>
      <div id="orange" onClick={changeColor}>
        MENU ITEM
      </div>
      <div id="paleturquoise" onClick={changeColor}>
        MENU ITEM
      </div>
      <div id="chocolate" onClick={changeColor}>
        MENU ITEM
      </div>
      <div id="pink" onClick={changeColor}>
        MENU ITEM
      </div>
      <div id="brown" onClick={changeColor}>
        MENU ITEM
      </div>
      <div id="violet" onClick={changeColor}>
        MENU ITEM
      </div>
      <div id="gray" onClick={changeColor}>
        MENU ITEM
      </div>
      <div id="salmon" onClick={changeColor}>
        MENU ITEM
      </div>
    </div>
  );
};
export default FlexMenuItem;
