import cors from "cors";
import express from "express";

import router from "./routes";
import { notFoundMiddleware } from "./middlewares/not-found.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(notFoundMiddleware)
app.use(errorMiddleware)

export default app;
