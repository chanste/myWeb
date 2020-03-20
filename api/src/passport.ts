//modules
import passport from "passport";
import jwt from "jsonwebtoken";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as BeareStrategy } from "passport-http-bearer";
import { RequestHandler } from "express";

//typeorm entities and repositories
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "./repositories/UsersRepository";

//JWT CONFIG
const SECRET = "PUT_YOUR_RANDOM_SECRET_STRING_HERE";
const TOKEN_EXPIRE = "99y";

//authenticate part
const authenticate: RequestHandler = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return next("PUT_YOUR_LOGIN_FAILED_ERROR");

    req.user = user;
    next();
  })(req, res, next);
};

//passport local strategy
passport.use(
  new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    session: false
  }),
  async (username, password, done) => {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findByUserName(username);

    //no Username
    if (!user) return done(null, false);

    //check password
  }
);

const serialize: RequestHandler = (req, res, next) => {
  req.user.loginedAt = new Date();
  next();
};

const generateTokens: RequestHandler = async (req, res, next) => {
  const user = getCustomRepository(UsersRepository);
};

export const authenticates: RequestHandler[] = [
  authenticate,
  serialize,
  generateTokens
];
