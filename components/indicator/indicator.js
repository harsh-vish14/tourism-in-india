import classes from "./indicator.module.scss";
const Indicator = ({ status, message }) => {
  var barColor = "";
  if (status === "success") {
    barColor = classes.success;
  } else if (status === "error") {
    barColor = classes.error;
  }
  const barClasses = `${classes.bar} ${barColor}`;
  return (
    <div className={barClasses}>
      <h3>{message}</h3>
    </div>
  );
};

export default Indicator;
