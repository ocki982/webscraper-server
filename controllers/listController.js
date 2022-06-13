const utils = require("../utils/utils.js");

const getData = (_req, res) => {
  const list = utils.readList();
  res.status(200).send(list);
};

module.exports = {
  getData,
};
