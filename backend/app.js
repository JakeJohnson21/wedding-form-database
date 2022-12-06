const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const restaurantRouter = require("./routes/restaurants");

const { mongoServerAddress } = require("./utils/utils");
const cors = require("cors");
const app = express();

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(`${db.name}`));
}

async function main() {
  const uri = "mongodb://localhost:27017/aroundb";
  const client = new MongoClient(uri);
  try {
    await client.connect();

    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

const { PORT = 3000 } = process.env;

mongoose.connect(mongoServerAddress);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "restaurant.json")));
app.use("/restaurants", restaurantRouter);
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
