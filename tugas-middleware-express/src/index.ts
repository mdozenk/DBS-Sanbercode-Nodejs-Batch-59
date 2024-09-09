import express, { Request, Response } from "express";
import apiRouter from "./routes/api";

const PORT = 3000;

function init() {
  const app = express();

  app.use(express.json());

  app.use("/api", apiRouter);

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  app.use((req: Request, res: Response) => {
    res.status(404).json({
      message: "Route not found",
      data: null,
    });
  });

  // Menjalankan server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
