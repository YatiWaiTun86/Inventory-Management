"use strict";

import fs from "fs";
import path from "path";
import { Sequelize, DataTypes, Options } from "sequelize";
import process from "process";
import { development, test, production } from "../../config/config"; // Adjust the path if necessary

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

// Extend Sequelize Options type to include `use_env_variable`
interface ExtendedOptions extends Options {
  use_env_variable?: string;
}

// Import configuration based on the environment
const config: ExtendedOptions = (() => {
  if (env === "test") return test as ExtendedOptions;
  if (env === "production") return production as ExtendedOptions;
  return development as ExtendedOptions;
})();

const db: { [key: string]: any } = {};
let sequelize: Sequelize;

// Initialize Sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(
    process.env[config.use_env_variable] as string,
    config
  );
} else {
  sequelize = new Sequelize(
    config.database as string,
    config.username as string,
    config.password as string,
    config
  );
}

// Read and import model files
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      !file.endsWith(".test.js")
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

// Set up associations if available
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Export the database object
export default {
  ...db,
  sequelize,
  Sequelize,
};
