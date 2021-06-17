import Image from "next/image";
import AddComment from "../addComment/addComment";
import CommentCard from "../commentCard/commentCard";
import CardHandler from "./card/card";
import { useEffect, useState } from "react";
import { getCommentsByStateName } from "../../lib/gettingandsetting";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import classes from "./stateName.module.scss";
const StateName = ({ stateData }) => {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const result = await getCommentsByStateName(stateData.stateName);
    setComment(result.data);
    setLoading(false);
  }, []);

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
        <div className={classes.title}>{stateData.stateName}</div>
      </div>
      <div className={classes.content}>
        <div className={classes.separator}>
          <h1>Welcome to {stateData.stateName}</h1>
          <div className={classes.stateData}>{stateData.stateData}</div>
        </div>
        <div className={classes.separator}>
          <h1>When to visit {stateData.stateName} ?</h1>
          <div className={classes.stateData}>{stateData.when}</div>
        </div>
        <div className={classes.separator}>
          <h1>Popular places in {stateData.stateName}</h1>
        </div>
      </div>
      <div className={classes.stateDataCards}>
        {stateData.TopAttractions.map((data) => (
          <CardHandler cardData={data} />
        ))}
      </div>
      <div className={classes.comment}>
        <AddComment setComment={setComment} stateName={stateData.stateName} />
      </div>
      <div>
        {!loading ? (
          comment.map((comment) => <CommentCard commentData={comment} />)
        ) : (
          <div className={classes.loading}>
            <AiOutlineLoading3Quarters />
          </div>
        )}
      </div>
    </div>
  );
};
export default StateName;
