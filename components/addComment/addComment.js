import { useSession } from "next-auth/client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
import classes from "./addcomment.module.scss";
import { useRef } from "react";
import { addComment } from "../../lib/gettingandsetting";

const AddComment = ({ setComment, stateName }) => {
  const [session, loading] = useSession();
  const commentMessage = useRef();
  const handlerClicked = async () => {
    const date = new Date();
    setComment((preve) => {
      return [
        {
          email: session.user.email,
          image: session.user.image,
          name: session.user.name,
          userID: session.user.userID,
          message: commentMessage.current.value,
          date: date.toISOString(),
        },
        ...preve,
      ];
    });
    const data = {
      userId: session.user.userID,
      date: date.toISOString(),
      message: commentMessage.current.value,
    };
    const response = await addComment(data, stateName);
  };
  if (loading) {
    return (
      <div className={classes.loading}>
        <AiOutlineLoading3Quarters />
      </div>
    );
  }
  if (session) {
    return (
      <div className={classes.addComment}>
        <input type="text" placeholder="add Comment" ref={commentMessage} />
        <div onClick={handlerClicked}>Submit</div>
      </div>
    );
  } else {
    return (
      <div className={classes.notLoggedIn}>
        <Link href="/auth/login">User must be logged in to Add Comment</Link>
      </div>
    );
  }
};

export default AddComment;
