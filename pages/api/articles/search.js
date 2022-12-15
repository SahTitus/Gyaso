import { connectToDb } from "../../../utils/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  const { searchTerm } = req.query;

  const default_limit = 10;
  const skip = req.query.skip ? Number(req.query.skip) : 0;

  const { db } = await connectToDb();
  if (method === "GET") {
    try {
      const title = new RegExp(searchTerm, "i");

      const totalCount = await db
        .collection("articles")
        .countDocuments({ title: title })
         
      const articles = await db
        .collection("articles")
        .find({ title: title })
        .skip(skip)
        .limit(default_limit)
        .sort({ title: 1 })
        .toArray();

      res.status(200).json({articles, totalCount}); 
    } catch (error) {
      //   res.status(500).json(error);
      console.log(error);
    }
  }
}
