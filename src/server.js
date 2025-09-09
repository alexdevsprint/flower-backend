import express from "express";
import cors from "cors";

import { getEnvVar } from "./utils/getEnvVar.js";

import router from "./routers/index.js";

const PORT = Number(getEnvVar("PORT", "3000"));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(router);

 

  app.get("/", (req, res) => {
    res.json({
      message: "Hello world!",
    });
  });

   app._router.stack.forEach(r => {
    if (r.route && r.route.path) {
      console.log(`${Object.keys(r.route.methods).join(', ').toUpperCase()} ${r.route.path}`);
    }
  });

  app.use((req, res, next) => {
    res.status(404).json({
      message: "Not found",
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
