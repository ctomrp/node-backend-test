import cors from "cors";
import express from "express";
import personRoutes from "./routes/person.routes.js";
import sexRoutes from "./routes/sex.routes.js";

const app = express();

const corsOptions = {
  origin: 'https://tu-aplicacion-angular.com', //cambiar por mi url del front
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", personRoutes);

app.use("/api", sexRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

export default app;
