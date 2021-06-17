import { db } from "../../../../lib/dbConnection";
import firebase from "firebase";
const handler = async (req, res) => {
  const { stateName } = req.query;
  if (req.method === "GET") {
    const statesDB = db.collection("stats");
    const state = await statesDB.where("stateName", "==", stateName).get();
    if (state.empty) {
      res.status(404).json({ err: "state not found" });
      return;
    }
    var comments;
    state.forEach((state) => {
      comments = state.data().comments;
    });
    // email: session.user.email,
    //       image: session.user.image,
    //       name: session.user.name,
    //       userID: session.user.userID,
    //       message: commentMessage.current.value,
    //       date: date.toISOString(),
    const userDB = db.collection("users");
    const commentDetails = [];
    for (let i = 0; i < comments.length; i++) {
      const user = userDB.doc(comments[i].userId);
      commentDetails.push({
        userID: user.id,
        ...(await user.get()).data(),
        date: comments[i].date,
        message: comments[i].message,
      });
    }
    res.status(200).json(commentDetails);
  }
  if (
    req.method === "POST" &&
    req.headers.authorization == process.env.AUTH_KEY
  ) {
    const { userId, date, message } = req.body;
    const statesDB = db.collection("stats");
    const userDB = db.collection("users");
    const state = await statesDB.where("stateName", "==", stateName).get();
    if (state.empty) {
      res.status(404).json({ err: "state not found" });
      return;
    }
    const user = userDB.doc(userId).get();
    if (!(await user).exists) {
      res.status(404).json({ err: "user not found" });
      return;
    }
    let stateID;
    state.forEach((state) => {
      stateID = state.id;
    });
    statesDB.doc(stateID).update({
      comments: firebase.firestore.FieldValue.arrayUnion({
        userId,
        date,
        message,
      }),
    });
    res.status(200).json({ message: "comment added successfully" });
  }
};

export default handler;
