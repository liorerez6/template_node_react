const pictures = require('../data/pictures');

exports.list = (req, res) => {
  res.status(200).json(pictures);
};
