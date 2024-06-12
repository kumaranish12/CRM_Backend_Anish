const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const customers = require('./routes/customers');
const audiences = require('./routes/audiences');
const campaigns = require('./routes/campaigns');

app.use('/api/customers', customers);
app.use('/api/audiences', audiences);
app.use('/api/campaigns', campaigns);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
