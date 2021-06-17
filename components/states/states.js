import StateCard from "./statesCard/statesCard";
import classes from "./states.module.scss";
import { slugConverter } from "../../lib/helper";
const States = ({ data }) => {
  return (
    <div className={classes.states}>
      {data.map((state) => {
        return <StateCard key={slugConverter(state.stateName)} state={state} />;
      })}
    </div>
  );
};

export default States;
