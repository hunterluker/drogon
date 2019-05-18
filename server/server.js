require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const morgan = require('morgan');
const passport = require('passport');

// API ROUTES
const authRoutes = require('./api/routes/authRoutes');
const searchRoutes = require('./api/routes/searchRoutes');

// ENV VARS
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 24 * 24 * 12 * 10000
    }
  })
);

// DATABASE CONNECT
massive(CONNECTION_STRING).then(db => {
  app.set('db', db);

  console.log('Connected to db...');
});

// Routes which should handle requests
app.use('/auth', authRoutes);

app.use('/search', searchRoutes);

app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));
