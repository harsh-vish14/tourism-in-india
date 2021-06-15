import { db } from "../../../lib/dbConnection";

const header = async (req, res) => {
  if (
    req.method === "POST" &&
    req.headers.authorization == process.env.AUTH_KEY
  ) {
    if (!req.body) {
      res.status(422).json({ err: "invalid response" });
      return;
    }
    await db.collection("stats").add(req.body);
    res.status(200).json({ message: "added data successfully" });
  } else {
    res.state(422).json({ message: "invalid authorization" });
  }
};

export default header;
