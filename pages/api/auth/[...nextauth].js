import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../lib/auth";
import { db } from "../../../lib/dbConnection";

export default NextAuth({
  session: {
    jws: true,
  },
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_KEY,
    }),
    Providers.Credentials({
      async authorize(credentials) {
        const user = await db
          .collection("users")
          .where("email", "in", [credentials.email])
          .get();
        const userData = [];
        user.forEach((user) => {
          userData.push(user.data());
        });
        if (user.empty) {
          throw new Error("User not found");
        }
        const isCorrect = await verifyPassword(
          credentials.password,
          userData[0].password
        );
        if (!isCorrect) {
          throw new Error("Invalid Password");
        }
        return {
          email: userData[0].email,
          image: userData[0].image,
          name: userData[0].name,
        };
      },
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      const userData = await db
        .collection("users")
        .where("email", "in", [user.email])
        .get();
      if (userData.empty) {
        const userdetails = await db.collection("users").add({
          email: user.email,
          name: user.name,
          image: user.picture,
        });
        // (await userdetails.get()).data()
        return {
          user: {
            userID: userdetails.id,
            email: user.email,
            name: user.name,
            image: user.picture,
          },
        };
      }
      var result;
      userData.forEach((data) => {
        result = {
          user: {
            userID: data.id,
            email: data.data().email,
            name: data.data().name,
            image: data.data().image,
          },
        };
      });

      return result;
    },
  },
});
