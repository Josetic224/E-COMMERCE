const dotenv = require('dotenv')
dotenv.config()

const config = {
    PORT : process.env.PORT || 5000,
    MONGODB_URL : process.env.DATABASE_URL
}

module.exports = config