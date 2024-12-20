import { Options } from "sequelize";

export const development: Options = {
  username: process.env.DEV_DB_USERNAME || "postgres",
  password: process.env.DEV_DB_PASSWORD || "root",
  database: process.env.DEV_DB_DATABASE || "Inventory_Management",
  host: process.env.DEV_DB_HOST || "127.0.0.1",
  dialect: "postgres",
  logging: process.env.DB_LOGGING === "true" ? true : false,
  timezone: "+06:30",
  pool: {
    max: Number(process.env.DEV_DB_POOL_SIZE) || 5,
  },
  retry: {
    match: [/Deadlock/i],
    max: 10, // Maximum retry 10 times
    backoffBase: 1000, // Initial backoff duration in ms. Default: 100,
    backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
  },
};

export const test: Options = {
  username: process.env.TEST_DB_USERNAME || "",
  password: process.env.TEST_DB_PASSWORD || "",
  database: process.env.TEST_DB_DATABASE || "",
  host: process.env.TEST_DB_HOST || "",
  dialect: "postgres",
  logging: process.env.DB_LOGGING === "true" ? true : false,
  timezone: "+06:30",
  pool: {
    max: Number(process.env.TEST_DB_POOL_SIZE) || 5,
  },
  retry: {
    match: [/Deadlock/i],
    max: 10, // Maximum retry 10 times
    backoffBase: 1000, // Initial backoff duration in ms. Default: 100,
    backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
  },
};

export const production: Options = {
  username: process.env.PROD_DB_USERNAME || "",
  password: process.env.PROD_DB_PASSWORD || "",
  database: process.env.PROD_DB_DATABASE || "",
  host: process.env.PROD_DB_HOST || "",
  dialect: "postgres",
  logging: process.env.DB_LOGGING === "true" ? true : false,
  timezone: "+06:30",
  pool: {
    max: Number(process.env.PROD_DB_POOL_SIZE) || 5,
  },
  retry: {
    match: [/Deadlock/i],
    max: 10, // Maximum retry 10 times
    backoffBase: 1000, // Initial backoff duration in ms. Default: 100,
    backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
  },
};
