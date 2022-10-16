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

      const articles = await db
        .collection("articles")
        .aggregate([
            {
              $match: {
                title: title,
              },
            },
            { $sample: { size: 10 } },
          ])
        .limit(default_limit)
        .toArray();
      res.status(200).json(articles);
    } catch (error) {
      //   res.status(500).json(error);
      console.log(error);
    }
  }
}
