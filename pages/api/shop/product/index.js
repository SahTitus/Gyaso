import { ObjectId } from "mongodb";
import { connectToDb } from "../../../../utils/mongodb";
import { createProduct, fetchProducts, findProductById } from "../../../../api-lib/db";

export default async function handler(req, res) {
  const { db } = await connectToDb();
  const { method } = req;

  const id = req.query.id;
  const body = req.body;

  const default_limit = 10;
  const skip = req.query.skip ? Number(req.query.skip) : 0;

  //  const product = await findProductById(db, id);

  if (method === "GET") {

    const product = await fetchProducts(db, skip, default_limit);
    res.status(200).json(product);
  }

  if (method === "POST") {
    const result = await createProduct(db, body);

    res.status(200).json(result);
  }
}
