const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async () => {
    try {
        const c = await mongoose.connect(process.env.DB_URL)
        console.log("database connected")
    } catch (error) {
        console.log(error.message)
        console.log('database not connected')
    }
}

module.exports = connectDB
