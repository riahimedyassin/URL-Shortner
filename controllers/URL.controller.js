const { createError } = require("../errors/custom/customError");
const URL = require("../models/URL.model");

const setURL = async (req, res, next) => {
  const { url } = req.body;
  if (!url) return next(createError("Provide URL", 400));
  const exist = await URL.findOne({ original: url });
  if (!exist) {
    const create = await URL.create({ original: url });
    if (create)
      return res
        .status(200)
        .json({ message: "Added Successfully", id: create._id });
    return next(createError("Error Creating the new URL", 500));
  }
  return res.status(200).json({ message: "Found before", data: exist._id });
};
const redirictURL = async (req, res, next) => {
  const { id } = req.params;
  const find = await URL.findOne({ _id: id });
  if (!find) return next(createError("Cannot Find this URL", 404));
  return res.status(200).redirict("https://www.google.com");
};

module.exports = {
  setURL,
  redirictURL,
};
