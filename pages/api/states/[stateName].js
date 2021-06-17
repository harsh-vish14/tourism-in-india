import { db } from "../../../lib/dbConnection";
const handler = async (req, res) => {
  if (req.method === "GET") {
    const { stateName } = req.query;
    const statesDB = db.collection("stats");
    console.log(stateName);
    const state = await statesDB.where("stateName", "==", stateName).get();
    if (state.empty) {
      res.status(404).json({ err: "state not found" });
      return;
    }
    var stateData;
    state.forEach((state) => {
      stateData = state.data();
    });
    res.status(200).json(stateData);
  }
};

export default handler;
