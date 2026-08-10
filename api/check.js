export default function handler(req, res) {
  const { key } = req.query;

  if (!key) {
    return res.status(400).json({
      success: false,
      message: "Key kosong"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Key valid",
    key: key
  });
}
