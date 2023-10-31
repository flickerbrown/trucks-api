import db from "../db/connection.js";
import Truck from "../models/Truck.js";
import trucks from "./trucks.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
  // Reset Database
  await db.dropDatabase();

  // Insert Data
  await Truck.create(trucks);

  console.log(chalk.magenta("Trucks created!"));

  // Close DB Connection
  await db.close();
};

insertData();