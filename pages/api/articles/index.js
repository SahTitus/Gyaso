import { connectToDb} from "../../../utils/mongodb";
import { Timestamp } from "mongodb";

export default async function handler(req, res) {
  const { method, body } = req;

  const skip = req.query.skip ? Number(req.query.skip) : 0
  const default_limit = 10

  console.log('j',skip)
  const { db } = await connectToDb();
  if (method === "GET") {
    try {
      const articles = await db
        .collection("articles")
        .find()
        .skip(skip).limit(default_limit)
        .toArray();
        console.log(articles);
      res.status(200).json(articles);
 
    } catch (error) {
    //   res.status(500).json(error);
    console.log(error)
    }
  }

  if (method === "POST") {
    try {
      const post = await db
        .collection("posts")
        .insertOne({ ...body, timestamp: new Timestamp() });
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
