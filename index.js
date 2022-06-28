const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});
const PORT = process.env.PORT || 9000;
app.listen(PORT, () =>
  console.log(`server listing on port http://localhost:${PORT}`)
);
