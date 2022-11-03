import { ObjectId } from "mongodb";
import {
  addToFavoriteArticles,
  fetchFavoriteArticles,
  findUserById,
} from "../../../../api-lib/db";
import { connectToDb } from "../../../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDb();

  const { method } = req;

  const userId = req.query.userId;
  const articleId = req.query.articleId;

  const user = await findUserById(db, userId);

  if (method === "GET") {
    const ids = user?.favoriteArticles?.map((id) => ObjectId(id));

    const articles = await fetchFavoriteArticles(db, ids);

    res.status(200).json(articles);
  }

  if (method === "PATCH") {
    const article = await db
      .collection("articles")
      .findOne({ _id: ObjectId(articleId) });


    const index = user.favoriteArticles.findIndex((id) => id === articleId);

    if (index === -1) {
      user.favoriteArticles.push(articleId);
      article.saves.push(userId);
    } else {
      user.favoriteArticles = user.favoriteArticles.filter(
        (id) => id !== articleId
      );
      article.saves = article.saves.filter((id) => id !== userId);
    }

     await db
    .collection("articles")
    .findOneAndUpdate(
      { _id: new ObjectId(articleId) },
      { $set: article }
    )


    await addToFavoriteArticles(db, userId, user);

    res.json({ msg: "👍" });
  }
}
