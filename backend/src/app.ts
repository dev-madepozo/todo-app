import cors from "cors";
import express from "express";

import router from "./routes";
import { notFoundMiddleware } from "./middlewares/not-found.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";
import { loggerMiddleware } from "./middlewares/logger.middleware";
import { env } from "./config";

const app = express();

app.use(loggerMiddleware);

// Global middlewares
app.use(cors({
  origin: env.CORS_ORIGIN
}));
app.use(express.json());

// Application routes
app.use(router);

// Error handling
app.use(notFoundMiddleware)
app.use(errorMiddleware)

export default app;
