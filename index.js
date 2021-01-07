const express = require("express");

const objectstocsv = require("objects-to-csv");

const fs = require("fs");

const app = express();


const data = [
  { ITEM1: "First name", ITEM2: "Olukayode" },
  { ITEM1: "Last name", ITEM2: "Oluseyi" },
  { ITEM1: "Age", ITEM2: "26" },
  { ITEM1: "DOB", ITEM2: "10th/02/1994" },
  { ITEM1: "Mobile", ITEM2: "08114426271" },
  { ITEM1: "Email", ITEM2: "alawiyeolukayode@gmail.com" },
  { ITEM1: "Matric Number", ITEM2: "2014/57403VB" },
];
const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  const csv = new objectstocsv(data)

  // Save to file:
    await csv.toDisk("./data.csv");

  res.download("./data.csv", () => {
    fs.unlinkSync("./data.csv");
  });
});

app.listen(PORT, () => {
  console.log("app is listening on port 5000");
});
