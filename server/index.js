import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import DBConnection from "./database/db.js";

const app = express();

app.use(cors());
app.use(
  cors({
    origin: "https://file-sharing-mern-i944.vercel.app/",
  })
);
app.use("/", router);

const PORT = 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
