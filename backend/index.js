const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const PORT = 4000;

// ✅ CORS setup to allow requests from your frontend
const corsOptions = {
  origin: 'http://chamodheranda.com', // ✅ Correct frontend origin
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// ✅ Use payment routes under /api
app.use('/api', paymentRoutes);

// ✅ Health check (optional)
app.get('/', (req, res) => {
  res.send('🚀 Payment backend is running!');
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});