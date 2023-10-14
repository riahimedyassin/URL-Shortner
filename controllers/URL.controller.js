const { createError } = require("../errors/custom/customError");
const URL = require("../models/URL.model");
const { linkValidator } = require("../utils/linkVakidator");
const sha1 = require("crypto-js/sha1");

const setURL = async (req, res, next) => {
  const { url } = req.body;
  if (!url) return next(createError("Provide URL", 400));
  if (!linkValidator(url)) next(createError("Invalid URL", 400));
  const encoded = sha1(url).toString().substring(0, 10);

  const exist = await URL.findOne({ hashed: encoded });
  if (!exist) {
    const create = await URL.create({ original: url, hashed: encoded });
    if (create)
    console.log(create)
      return res
        .status(200)
        .json({ message: "Added Successfully", data: create.hashed });
    return next(createError("Error Creating the new URL", 500));
  }
  return res.status(200).json({ message: "Found before", data: exist.hashed });
};
const redirictURL = async (req, res, next) => {
  const { id } = req.params;
  const find = await URL.findOne({ hashed: id });
  if (!find) return next(createError("Cannot Find this URL", 404));
  return res.status(200).json({
    link: find.original,
  });
};

module.exports = {
  setURL,
  redirictURL,
};
