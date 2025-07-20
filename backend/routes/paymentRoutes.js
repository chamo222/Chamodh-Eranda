const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const MERCHANT_ID = "1231226"; // ✅ Sandbox Merchant ID
const MERCHANT_SECRET = "MzE2NzcyNjI5OTkxMzIwODQ0NzEzODE5NzczNzUyODQ2MzY3MTYw"; // 🔐 Raw secret from PayHere

// ✅ Function to generate PayHere secure hash
function generatePayHereHash({ merchant_id, order_id, amount, currency }) {
  const md5secret = crypto
    .createHash('md5')
    .update(MERCHANT_SECRET)
    .digest('hex')
    .toUpperCase();

  const data = merchant_id + order_id + amount + currency + md5secret;

  const hash = crypto
    .createHash('sha256')
    .update(data)
    .digest('hex');

  return hash;
}

// ✅ POST route to generate payment hash
router.post('/create-payment-hash', (req, res) => {
  const { order_id, amount, currency } = req.body;

  if (!order_id || !amount || !currency) {
    return res.status(400).json({ error: '❌ Missing parameters' });
  }

  try {
    const hash = generatePayHereHash({
      merchant_id: MERCHANT_ID,
      order_id,
      amount,
      currency,
    });

    res.json({ hash });
  } catch (error) {
    console.error("❌ Error generating hash:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;