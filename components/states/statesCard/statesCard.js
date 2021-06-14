import Image from "next/image";
import Link from "next/link";
import classes from "./statesCard.module.scss";
import { FiArrowRight } from "react-icons/fi";
import { slugConverter } from "../../../lib/helper";
const StateCard = ({ state }) => {
  const stateLink = `/states/${slugConverter(state.stateName)}`;
  return (
    <div className={classes.stateCard}>
      <div className={classes.stateLink}>
        <Link href={stateLink}>
          <a>
            <FiArrowRight />
          </a>
        </Link>
      </div>
      <div className={classes.stateImage}>
        <Image
          src={state.stateImage}
          alt={state.stateName}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={classes.stateCardTitle}>{state.stateName}</div>
      <div className={classes.stateData}>{state.stateData}</div>
    </div>
  );
};

export default StateCard;
