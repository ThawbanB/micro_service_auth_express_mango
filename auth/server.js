require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error(err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));
