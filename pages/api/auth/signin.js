import { db } from "../../../lib/dbConnection";
import { hashPassword } from "../../../lib/auth";
const handler = async (req, res) => {
  if (
    req.method === "POST" &&
    req.headers.authorization == process.env.AUTH_KEY
  ) {
    const { name, email, password } = req.body;
    if (!email || !password || !email.includes("@")) {
      res.status(422).json({ err: "Invalid Response" });
      return;
    }
    if (password.trim().length < 7) {
      res.status(422).json({ err: "Small password" });
      return;
    }
    const user = await db
      .collection("users")
      .where("email", "in", [email])
      .get();
    if (!user.empty) {
      res.status(422).json({ err: "User already exists" });
      return;
    }
    const hashedPassword = await hashPassword(password);
    await db.collection("users").add({
      name: email,
      email,
      password: hashedPassword,
      image: "/default.png",
    });
    res.status(200).json({ message: "Registered user successfully" });
  }
};

export default handler;
