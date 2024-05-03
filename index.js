const mongoose = require('mongoose');
const app = require('./src/app');
const dotenv = require('dotenv');
const config = require('./src/config/config');
dotenv.config(); // Load environment variables


(async () => {
  try {
    // Access the DATABASE_URL from the environment variables
    await mongoose.connect(config.MONGODB_URL);
    console.log("DB connected!");
    
    app.on('error', (err) => {
      console.error("ERROR", err);
      throw err;
    });

    const onListening = () => {
      console.log(`Listening on port ${config.PORT}`);
    };

    app.listen(config.PORT, onListening);
  } catch (err) {
    console.error("ERROR", err);
    throw err;
  }
})();
