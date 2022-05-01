const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/usuarioRouter.js");
const { Router } = require("express");
const PORT = process.env.PORT || 8080;

var corOptions = { origin: "https://localhost:3306" };

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.get("/api", (req, res) => res.json({ message: "hello from api" }));
app.listen(PORT, () => {console.log(`server is running on port ${PORT}`);
});
