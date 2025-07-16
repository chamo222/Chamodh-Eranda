const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const MERCHANT_ID = "1231226";
const MERCHANT_SECRET = "1306689057175948772719864355013262559786"; // ✅ decoded string only

function generatePayHereHash({ merchant_id, order_id, amount, currency }) {
  const raw = merchant_id + order_id + amount + currency + MERCHANT_SECRET;
  return crypto.createHash('md5').update(raw).digest('hex');
}

router.post('/create-payment-hash', (req, res) => {
  const { order_id, amount, currency } = req.body;

  if (!order_id || !amount || !currency) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  const hash = generatePayHereHash({
    merchant_id: MERCHANT_ID,
    order_id,
    amount,
    currency,
  });

  res.json({ hash });
});

module.exports = router;