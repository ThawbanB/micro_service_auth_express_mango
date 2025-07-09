require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db'); // 
const authRoutes = require('./routes/auth');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port,'0.0.0.0', () => console.log(`Serveur lancé sur le port ${port}`));