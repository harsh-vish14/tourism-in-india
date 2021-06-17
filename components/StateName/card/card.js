import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import classes from "./card.module.scss";
const CardHandler = ({ cardData }) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardImage}>
        <Image
          src={cardData.placeImage}
          alt={cardData.placeName}
          layout="responsive"
          height={300}
          width={400}
        />
      </div>
      <div className={classes.cardBody}>
        <div className={classes.cardName}>{cardData.placeName}</div>
        <div className={classes.cardDetails}>
          <div className={classes.cardLandmarks}>{cardData.landmarks}</div>
          <div className={classes.cardRating}>
            {[...Array(cardData.rating)].map(() => (
              <AiTwotoneStar />
            ))}
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        {cardData.ticketsPrice} <BiRupee />
      </div>
    </div>
  );
};
export default CardHandler;
