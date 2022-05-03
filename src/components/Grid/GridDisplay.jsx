import GridForm from "./GridForm";
import GridMenuItem from "./GridMenuItem";
import classes from "./GridDisplay.module.css";

const GridDisplay = () => {
  return (
    <div className={classes.gridContainer}>
      <header id="gridHeader" className={classes.gridHeader}>
        HEADER
      </header>
      <div className={classes.gridMain}>
        <div className={classes.contentBody}>
          <GridMenuItem></GridMenuItem>
          <GridForm></GridForm>
        </div>
      </div>
      <div className={classes.gridBar}>SIDE BAR</div>
      <footer id="gridFooter" className={classes.gridFooter}>
        FOOTER
      </footer>
    </div>
  );
};
export default GridDisplay;
