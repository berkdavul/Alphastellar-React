import classes from "./GridMenuItem.module.css";
import React, { useEffect } from "react";

const GirdMenuItems = () => {
  const changeColor = (e) => {
    if (e.target?.id) {
      document.getElementById("resGridButon").style.background = e.target.id;
      document.getElementById("subGridButon").style.background = e.target.id;
      document.getElementById("resGridButons").style.background = e.target.id;
      document.getElementById("subGridButons").style.background = e.target.id;
      document.getElementById("gridHeader").style.background = e.target.id;
      document.getElementById("gridFooter").style.background = e.target.id;

      localStorage.setItem("grid-color", JSON.stringify(e.target.id));
    }
    if (e) {
      document.getElementById("resGridButon").style.background = e;
      document.getElementById("subGridButon").style.background = e;
      document.getElementById("resGridButons").style.background = e;
      document.getElementById("subGridButons").style.background = e;
      document.getElementById("gridHeader").style.background = e;
      document.getElementById("gridFooter").style.background = e;
    }
  };

  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem("grid-color"));
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
export default GirdMenuItems;
