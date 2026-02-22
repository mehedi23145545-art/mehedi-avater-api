import crypto from "crypto";

export default function handler(req, res) {
  const { uid } = req.query;

  if (!uid) {
    return res.status(400).send("UID parameter required");
  }

  const avatars = [
    "boy.png",
    "fire.png",
    "dragon.png",
    "cat.png",
    "ghost.png",
    "hero.png",
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png",
    "img6.png",
    "img7.png",
    "img8.png",
    "img9.png"
  ]; // এখানে তোমার আসল 15টা নাম বসাও

  const hash = crypto.createHash("md5").update(uid).digest("hex");
  const number = parseInt(hash, 16);

  const selected = avatars[number % avatars.length];

  res.redirect(`/avatars/${selected}`);
}