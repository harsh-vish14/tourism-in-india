import Link from "next/link";
import Image from "next/image";
import classes from "./mainCard.module.scss";
import { slugConverter } from "../../lib/helper";
const MainCard = ({ cardImage, cardTitle, cardContent }) => {
  const stateLink = `/states/${slugConverter(cardTitle)}`;
  return (
    <div className={classes.cardBody}>
      <div className={classes.cardTitle}>{cardTitle}</div>
      <div className={classes.cardImage}>
        <Image
          src={cardImage}
          alt={cardTitle}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <div className={classes.cardContent}>{cardContent}</div>
        <Link href={stateLink}>
          <a>
            <div className={classes.btn}>read more</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MainCard;
