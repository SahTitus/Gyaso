import {
  deleteProduct,
  findProductById,
  updateProduct,
} from "../../../../api-lib/db";
import { connectToDb } from "../../../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDb();

  const { method } = req;

  const id = req.query.id;

  const body = req.body;

  const product = await findProductById(db, id);

  if (method === "GET") {
    res.status(200).json(product);
  }

  if (method === "DELETE") {
    await deleteProduct(db, id);
    res.status(200);
  }

  if (method === "PATCH") {
    const updatedProduct = await updateProduct(db, id, body);

    res.status(200).json(updatedProduct);
  }
}
