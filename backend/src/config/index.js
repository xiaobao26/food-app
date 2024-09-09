require("dotenv").config();

const optionConfigs = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || 'dev',
}

const requiredConfigs = {
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
}

for (const key in requiredConfigs) {
    // using '=='to check undefined and null
    if (requiredConfigs[key] == null) {
        throw new Error(`Missing value for environment variable ${key}`)
    }
}

module.exports = {
    ...optionConfigs,
    ...requiredConfigs,
}