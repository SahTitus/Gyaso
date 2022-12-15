import { connectToDb } from "../../../utils/mongodb";

export default async function handler(req, res) {
  const { method } = req;
  const { searchTerm } = req.query;

  const skip = req.query.skip ? Number(req.query.skip) : 0;

  const { db } = await connectToDb();

  if (method === "GET" && searchTerm) {
    try {
      const topic = new RegExp(searchTerm, "i");

      const totalCount = await db
        .collection("topics")
        .countDocuments({ title: topic });

      const topics = await db
        .collection("topics")
        .find({ title: topic })
        .skip(skip)
        .limit(15)
        .sort({ title: 1 })
        .toArray();

      res.status(200).json({ topics, totalCount });
    } catch (error) {
      //   res.status(500).json(error);
      console.log(error);
    }
  }
}
