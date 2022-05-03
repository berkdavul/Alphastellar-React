import FlexForm from "./FlexForm";
import FlexMenuItem from "./FlexMenuItem";
import classes from "./FlexDisplay.module.css";
const Display = () => {
  return (
    <div>
      <header id="flexHeader">HEADER</header>

      <div className={classes.page}>
        <div className={classes.content}>
          <div className={classes.contentBody}>
            <FlexMenuItem></FlexMenuItem>
            <FlexForm></FlexForm>
          </div>
        </div>
        <div className={classes.sideBar}>SIDE BAR</div>
      </div>

      <footer id="flexFooter">FOOTER</footer>
    </div>
  );
};
export default Display;
