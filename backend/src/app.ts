import cors from "cors";
import express from "express";

import router from "./routes";
import { notFoundMiddleware } from "./middlewares/not-found.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";
import { loggerMiddleware } from "./middlewares/logger.middleware";

const app = express();

app.use(loggerMiddleware);

// Global middlewares
app.use(cors());
app.use(express.json());

// Application routes
app.use(router);

// Error handling
app.use(notFoundMiddleware)
app.use(errorMiddleware)

export default app;
