import 'dotenv/config';
import express from "express";
import dbConn from "./db/conn.js"
import userRoute from "./routes/userRoute.js";
import empRoute from "./routes/employeeRoute.js";
import loanRoute from "./routes/loanRoute.js";

const PORT = 3000;
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

app.get("/", (req, res) => {
  res.send("Welcome SBA319MongoDbApp API.");
});

app.use("/bankloan/user", userRoute);
app.use("/bankloan/employee", empRoute);
app.use("/bankloan/loan", loanRoute);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere..."+err);
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  dbConn();
});
