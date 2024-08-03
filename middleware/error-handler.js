const errorHandlerMiddleWare = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ msg: "Internal Server Error." });
};
module.exports = errorHandlerMiddleWare;
