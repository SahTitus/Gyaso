import { ObjectId } from "mongodb";
import normalizeEmail from "validator/lib/normalizeEmail";

export const findProductById = async (db, id) => {
  return db
    .collection("products")
    .findOne({ _id: new ObjectId(id) })
    .then((product) => product || null);
};
export const findProductBySlug = async (db, slug) => {
  return db
    .collection("products")
    .findOne({ slug: slug })
    .then((product) => product || null);
};

export const fetchProducts = async (db, skip, default_limit) => {
  return db
    .collection("products")
    .find()
    .skip(skip)
    .limit(default_limit)
    .toArray();

  // .then((articles) => articles || null);
};

export const createProduct = async (db, product) => {
  const email = normalizeEmail(product.email);

  const { insertedId } = await db
    .collection("products")
    .insertOne({ ...product, email });
  product._id = insertedId;
  return product;
};

export async function updateProduct(db, id, data) {
  return db
    .collection("products")
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data })
    .then((product) => product || null);
}

export const deleteProduct = async (db, id) => {
  return db
    .collection("products")
    .deleteOne({ _id: new ObjectId(id) })
    .then((product) => product || null);
};

export async function addToWishlist(db, id, data) {
  return db
    .collection("products")
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data })
    .then((user) => user || null);
}
