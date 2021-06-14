import MainCard from "../../mainCard/maincard";
import classes from "./topPlace.module.scss";
const TopPlace = ({ CardDetails }) => {
  return (
    <div id="explore">
      <h3 className={classes.topPlacesTitle}>Top Tourist Places</h3>
      <div className={classes.cards}>
        {CardDetails.map((card) => {
          return (
            <MainCard
              key={card.title}
              cardImage={card.image}
              cardTitle={card.title}
              cardContent={card.content}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TopPlace;
