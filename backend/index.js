const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes'); // ✅ Import the route

const app = express();
const PORT = 4000;

// ✅ Working CORS options to support preflight (OPTIONS) requests
const corsOptions = {
  origin: 'https://chamodheranda.com/',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 200 // ✅ Add this for legacy browser support
};

app.use(cors(corsOptions)); // ✅ Apply CORS globally
app.use(express.json());

// ✅ Register route
app.use('/api', paymentRoutes);


// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});