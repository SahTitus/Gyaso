import { connectToDb } from "../../../utils/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  const skip = req.query.skip ? Number(req.query.skip) : 0;

  const { db } = await connectToDb();
  if (method === "GET") {
    try {

      const topics = await db
        .collection("topics")
        .find()
        .skip(skip)
        .limit(20)
        .sort({ title: 1 })
        .toArray();

      res.status(200).json(topics);
    } catch (error) {
      //   res.status(500).json(error);
      console.log(error);
    }
  }

 
}
