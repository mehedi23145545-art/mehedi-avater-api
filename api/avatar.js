const crypto = require("crypto");

module.exports = (req, res) => {
  const { uid } = req.query;

  if (!uid) {
    return res.status(400).send("UID parameter required");
  }

  const totalAvatars = 15;

  const hash = crypto.createHash("md5").update(uid).digest("hex");
  const number = parseInt(hash, 16);

  const avatarNumber = (number % totalAvatars) + 1;

  res.redirect(`/avatars/${avatarNumber}.png`);
};