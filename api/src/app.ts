//basic server modules
import express, { ErrorRequestHandler } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";

//typeorm config
import { createConnection, Connection } from "typeorm";

//environment
import * as dotenv from "dotenv";

//connec to eitity
createConnection()
  .then(async (connection: Connection) =>
    console.log("DB connected : ", connection.isConnected)
  )
  .catch((err: Error) => console.log("DB connection error : ", err));

//environment set
dotenv.config();

//create express server
const app = express();

//cors middleware
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    }
  })
);

//express configuration
app.set("port", process.env.PORT || 3000);

//parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

//routes

//error handling middleware
const errorRequestHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err) return res.status(err.status).json(err.responst());
  //err must be common error. after that i add new Error classes i will sepecify the err type what err it is

  next(err); //errors except common error
};

app.use(errorRequestHandler);

export default app;
