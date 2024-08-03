const notFound = (req, res) => {
  res.status(404).json({ msg: "Resource not found!" });
};
module.exports = notFound;
