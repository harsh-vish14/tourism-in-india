import { db } from "../../../lib/dbConnection";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const statsDb = await db.collection("stats");
    const statsDetails = await statsDb.get();
    const data = [];
    statsDetails.forEach((stats) => {
      data.push({
        stateName: stats.data().stateName,
        stateImage: stats.data().stateImage,
        stateData: stats.data().stateData,
        _id: stats.id,
      });
    });
    res.status(200).json(data);
  }
};

export default handler;
