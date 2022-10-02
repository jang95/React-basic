process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

process.on("unhandleRejection", (err) => {
  throw err;
});
