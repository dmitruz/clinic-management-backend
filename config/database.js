const { Sequelize } = require('sequelize');
const path = require('path');

// Build base config
const dbConfig = {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT || undefined,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// Dialect-specific settings
if (dbConfig.dialect === 'sqlite') {
    dbConfig.storage = process.env.DB_STORAGE;
}

if (dbConfig.dialect === 'mysql') {
    dbConfig.define = { timestamps: false };
    dbConfig.logging = false;
    dbConfig.operatorAliases = false;
}

// Create Sequelize instance
const db = new Sequelize(
    process.env.DB_SCHEMA,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    dbConfig
);

module.exports = db;