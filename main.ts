// @deno-types='npm:@types/express@4'
import Deno from "Deno"
import express, { NextFunction, Request, Response } from 'express';

const app = express();
const port = Number(Deno.env.get("PORT")) || 3000;

const reqLogger = function (req, _res, next) {
  console.info(`${req.method} request to "${req.url}" by ${req.hostname}`);
  next();
};

app.use(reqLogger);

app.get("/", (_req, res) => {
    res.status(200).send("Hello from Deno and Express!");
  });

app.listen(port, () => {
console.log(`Listening on ${port} ...`);
});

