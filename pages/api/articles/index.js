import { connectToDb} from "../../../utils/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  // const skip = req.query.skip ? Number(req.query.skip) : 0

  const { db } = await connectToDb();
  if (method === "GET") {
    try {
      const articles = await db
        .collection("articles")
        .aggregate([ { $sample: { size: 10 } } ])
        .toArray();
        console.log(articles);
      res.status(200).json(articles);
 
    } catch (error) {
    //   res.status(500).json(error);
    console.log(error)
    }
  }
  // .collection("articles")
  // .find()
  // .skip(skip).limit(default_limit)
  // .toArray();
}