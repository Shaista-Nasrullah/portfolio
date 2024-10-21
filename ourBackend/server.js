// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path");

// //dotenv configuartion
// dotenv.config();

// //rest object
// const app = express();

// //midlewares
// app.use(cors());
// app.use(express.json());

// // static files access
// app.use(express.static(path.join(__dirname, "../client/build")));

// //routes
// app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// //port
// const PORT = process.env.PORT || 8080;

// //listen
// app.listen(PORT, () => {
//   console.log(`Server Runnning On PORT ${PORT} `);
// });

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// dotenv configuration
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// static files access
app.use(express.static(path.join(__dirname, "../client/build")));

// routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// serve static files for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Export the app for Vercel's serverless function
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
