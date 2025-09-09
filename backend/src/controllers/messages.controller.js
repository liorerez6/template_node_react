const messages = require('../data/messages');

exports.getByPicture = (req, res) => {
  const { pictureId } = req.params;
  const pictureMessages = messages.filter(msg => msg.pictureId === pictureId);
  res.status(200).json(pictureMessages);
};

exports.list = (req, res) => {
  res.status(200).json(messages);
};