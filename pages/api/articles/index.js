import { connectToDb} from "../../../utils/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  const { queryCategory } = req.query;

  console.log(method)

  // const skip = req.query.skip ? Number(req.query.skip) : 0

  const { db } = await connectToDb();
  if (method === "GET") {
    try {
      const articles = await db
        .collection("articles")
        .aggregate([ { $sample: { size: 10 } } ])
        .toArray();
        // console.log(articles);
      res.status(200).json(articles);
 
    } catch (error) {
    //   res.status(500).json(error);
    console.log(error)
    }
  }

  
if (method === "GET" && queryCategory) {


  const sub_category = new RegExp(queryCategory, "i");

  try {
    const articles = await db
      .collection("articles")
      .aggregate( [  {
        $match: {
          "sub_category": sub_category
        }
      }, { $sample: { size: 10 } } ])
      .toArray();
      // console.log(articles);
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