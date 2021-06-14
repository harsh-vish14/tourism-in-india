import StateCard from "./statesCard/statesCard";
import classes from "./states.module.scss";
const States = ({ data }) => {
  console.log(data);
  return (
    <div className={classes.states}>
      {data.map((state) => {
        return <StateCard state={state} />;
      })}
    </div>
  );
};

export default States;
