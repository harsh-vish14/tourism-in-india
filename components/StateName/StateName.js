import Image from "next/image";
import classes from "./stateName.module.scss";
const StateName = ({ stateData }) => {
  return (
    <div className={classes.stateNameBody}>
      <div className={classes.header}>
        <div className={classes.imageContainer}>
          <Image
            src={stateData.stateImage}
            alt={stateData.stateName}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            objectPosition="center"
          />
        </div>
        <div className={classes.title} name={stateData.stateName}>
          {stateData.stateName}
        </div>
      </div>
      <div className={classes.content}>
        <div></div>
      </div>
    </div>
  );
};
export default StateName;
