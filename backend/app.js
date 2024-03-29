const express = require('express')
const allUserRoutes = require('./routes/user')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const {errorMiddleware} = require('./middlewares/Error')
const cors = require('cors')

const app = express()

dotenv.config(); // Automatically finds and loads .env in the root

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [https://job-listing-fullstack-hpuf.vercel.app],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use('/api/v1/user', allUserRoutes);

app.use(errorMiddleware)

module.exports = app
