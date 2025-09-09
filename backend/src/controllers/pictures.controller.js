const pictures = require('../data/pictures');

// רשימת תמונות לגלריה (שלב 1)
exports.list = (req, res) => {
  res.status(200).json(pictures);
};
