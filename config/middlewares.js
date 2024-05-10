module.exports = {
  load: {
    order: [
      "strapi::logger",
      "strapi::errors",
      "strapi::security",
      "strapi::cors",
      "strapi::poweredBy",
      "strapi::query",
      "strapi::body",
      "strapi::session",
      "strapi::favicon",
      "strapi::public",
    ],
  },
  settings: {
    cors: {
      origin: ["https://tceimports.com/"],
    },
    public: {
      path: "./public",
      maxAge: 60000,
    },
  },
};
