import Image from "next/image";
import classes from "./commentCard.module.scss";
const CommentCard = ({ commentData }) => {
  const getMonth = (number) => {
    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    if (months == "") {
      return "";
    }
    return months[number];
  };
  const timeFormatter = (isoTime) => {
    const date = new Date(isoTime);

    return `${date.getDay()} ${getMonth(
      date.getMonth()
    )} ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
  };
  return (
    <div className={classes.comment}>
      <div className={classes.commentHeader}>
        <div className={classes.imageLabel}>
          <Image
            src={commentData.image}
            alt={commentData.name}
            height={50}
            width={50}
            layout="fixed"
          />
        </div>
        <div className={classes.commentDetails}>
          <div>{commentData.name}</div>
          <div>{timeFormatter(commentData.date)}</div>
        </div>
      </div>
      <div className={classes.message}>{commentData.message}</div>
    </div>
  );
};

export default CommentCard;
