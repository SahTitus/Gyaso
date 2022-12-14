import { ObjectId } from "mongodb";
import {
  addToWishlist,
  fetchWishlist,
  findUserById,
} from "../../../../../api-lib/db";
import { findProductBySlug } from "../../../../../api-lib/db/shop";
import { connectToDb } from "../../../../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDb();

  const slug = req.query.slug;

    const product = await findProductBySlug(db, slug);

if (product) {
    res.json({slugExists: true})
} else {
    res.json({slugExists: false})
}
  }

