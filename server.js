import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
// import authRouter from "./routes/auth-user";
// import testRouter from "./test-routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
// const corsOptions = { credentials: true, origin: process.env.URL || "*" };

//middleware
app.use(cors());
app.use(express.json());

app.use("/api", router);
// app.use("/api", authRouter); 
// app.get('/', (req, res) => {



app.listen(PORT, () => console.log(`Live on http://localhost:${PORT}`));
