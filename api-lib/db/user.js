import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import normalizeEmail from "validator/lib/normalizeEmail";

export const loginWithEmailAndPassword = async (db, email, password) => {
  email = normalizeEmail(email);
  const user = await db.collection("users").findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    return { ...user, password: undefined }; // filtered out password
  }
  return null;
};

export const login = async (db, userId) => {
  return db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) }, { projection: { password: 0 } })
    .then((user) => user || null);
};

export const findUserById = async (db, userId) => {
  return db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) })
    .then((user) => user || null);
};

export const findUserByEmail = async (db, email) => {
  email = normalizeEmail(email);
  return db
    .collection("users")
    .findOne({ email })
    .then((user) => user || null);
};

export const insertUser = async (
  db,
  { email, originalPassword, name, photo, favoriteArticles=[] }
) => {
  const user = {
    emailVerified: false,
    photo,
    email,
    name,
    favoriteArticles,
  };

  const password = await bcrypt.hash(originalPassword, 10);

  // Just added a new field to articles doc called ''saves'
  // db.collection('articles').updateMany({}, {$set:{"saves": []}})

  const { insertedId } = await db
    .collection("users")
    .insertOne({ ...user, password });
  user._id = insertedId;
  return { ...user, password: undefined };
};
export const insertUserGoogle = async (
  db,
  { email, name, photo,  favoriteArticles=[]}
) => {
  const user = {
    emailVerified: false,
    photo,
    email,
    name,
    favoriteArticles,
  };

  const { insertedId } = await db.collection("users").insertOne(user);
  user._id = insertedId;
  return user;
};

export async function addToFavoriteArticles(db, userId, data) {
  return db
    .collection("users")
    .findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { $set: data },
      { projection: { password: 0 } }
    )
    .then((user) => user || null);
}


export async function updateProduct(db, id, data) {
  return db
    .collection('users')
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: data },
    )
    .then(({ value }) => value);
}


export const fetchFavoriteArticles = async (db, ids) => {
  return db
    .collection("articles")
    .find({ _id: { $in: ids } })
    .sort({
      _id: -1,
    })
    .toArray();

  // .then((articles) => articles || null);
};
