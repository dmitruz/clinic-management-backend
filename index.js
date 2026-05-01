const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load base .env (PORT, general config)
dotenv.config({ path: path.join(__dirname, '.env') });

// Load environment-specific DB config (.env.mysql or .env.sqlite)
const ENV_FILE = process.env.NODE_ENV
    ? `.env.${process.env.NODE_ENV}`
    : `.env.sqlite`;

const ENV_PATH = path.join(__dirname, ENV_FILE);

console.log(`🔧 Loading database environment from: ${ENV_PATH}`);

dotenv.config({ path: ENV_PATH });



// Load Database & Start Server
const db = require('./config/database');
const app = express();

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

app.use('/', require('./routes/index'));

// Validate Server PORT
const PORT = process.env.PORT ? parseInt(process.env.PORT.trim(), 10) : 4000;
if (!process.env.PORT) {
    console.error("❌ ERROR: PORT is not defined in .env");
    process.exit(1);
}
if (isNaN(PORT)) {
    console.error("❌ ERROR: PORT is not a valid number:", process.env.PORT);
    process.exit(1);
}

db.authenticate()
    .then(() => {
        console.log('✅ Database connected...');
        return db.sync();
    })
    .then(() => {
        app.listen(PORT, () =>
            console.log(`🚀 Server running on port ${PORT}`)
        );
    })
    .catch(err => console.error("❌ Boot error:", err));