import { connectToDb } from "../../../utils/mongodb";
import {
  findUserByEmail,
  insertUser,
  insertUserGoogle,
  loginWithEmailAndPassword,
} from "../../../api-lib/db";
import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import normalizeEmail from "validator/lib/normalizeEmail";

const secret =
  "1**2v****hft26525w5d2sswxkbXX`Y8******771@425525DS8GCGGGSHV****a12e2e78e22e";

export default async function handler(req, res) {
  const { method } = req;
  const { db } = await connectToDb();

  let { name, email, password, signin, google, photo } = req.body;

  email = normalizeEmail(req.body.email);

  if (!isEmail(email)) {
    res
      .status(400)
      .json({ error: { message: "The email you entered is invalid." } });
    return;
  }
  const emailExist = await findUserByEmail(db, email);

  if (method === "POST" && signin) {
    const result = await loginWithEmailAndPassword(db, email, password);

    if (!result) {
      res.status(403).json({ error: { message: "Invalid credentials." } });
    } else {
      const token = jwt.sign(
        { email: result?.email, id: result?._id },
        secret,
        { expiresIn: "1000h" }
      );

      res.status(200).json({ result, token });
    }
  }

  if (method === "POST" && !signin && !google) {
    if (emailExist) {
      res
        .status(403)
        .json({ error: { message: "The email has already been used." } });
      return;
    }

    const result = await insertUser(db, {
      email,
      originalPassword: password,
      name,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1000h",
    });

    res.status(200).json({ result, token });
  }

  if (method === "POST" && google) {
    if (emailExist) {
      res;
      const token = jwt.sign(
        { email: emailExist.email, id: emailExist._id },
        secret,
        { expiresIn: "1000h" }
      );
      res.status(200).json({ result: emailExist, token });
    } else {
      const result = await insertUserGoogle(db, {
        email,
        photo,
        name,
      });

      const token = jwt.sign({ email: result.email, id: result._id }, secret, {
        expiresIn: "1000h",
      });

      res.status(200).json({ result, token });
    }
  }
}
