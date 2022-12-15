import { connectToDb } from "../../../../utils/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  const { queryCategory } = req.query;

  const { db } = await connectToDb();

  if (method === "GET" && queryCategory) {
    const category_id = new RegExp(queryCategory, "i");

    try {
      
      const totalCount = await db
        .collection("articles")
        .countDocuments({ category_id: category_id })
         
      const articles = await db
        .collection("articles")
        .aggregate([
          {
            $match: {
              category_id: category_id,
            },
          },
          { $sample: { size: 10 } },
        ])
        .toArray();
      res.status(200).json({articles, totalCount});
    } catch (error) {
      //   res.status(500).json(error);
      console.log(error);
    }
  }
}
