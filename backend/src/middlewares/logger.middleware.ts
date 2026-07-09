import pinoHttp from "pino-http";

export const loggerMiddleware = pinoHttp({
  customSuccessMessage(req, res) {
    return `${req.method} ${req.url} ${res.statusCode}`;
  },
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      ignore: "pid,hostname,req,res",
    },
  },
});
