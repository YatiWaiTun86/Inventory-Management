import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.TEST_DB || process.env.DEV_DB,
});

const connectDb = async () => {
  try {
    await pool.connect();
    console.log("DB connected...");
  } catch (error) {
    console.log("Error occurred while connecting to DB:", error);
  }
};

export default connectDb;
