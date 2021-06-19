module.exports = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "images.thrillophilia.com",
      "thumbs.dreamstime.com",
      "www.planetware.com",
      "i.pinimg.com",
      "images.squarespace-cdn.com"
    ],
  },
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_SECRET_KEY: process.env.GOOGLE_SECRET_KEY,
    AUTH_KEY: process.env.AUTH_KEY,
    DB_APIKEY: process.env.DB_APIKEY,
    DB_AUTHDOMAIN: process.env.DB_AUTHDOMAIN,
    DB_PROJECTID: process.env.DB_PROJECTID,
    DB_STORAGEBUCKET: process.env.DB_STORAGEBUCKET,
    DB_MESSAGINGSENDERID: process.env.DB_MESSAGINGSENDERID,
    DB_APPID: process.env.DB_APPID,
  },
};
