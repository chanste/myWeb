//modules
import passport from "passport";
import jwt from "jsonwebtoken";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as BeareStrategy } from "passport-http-bearer";
import { RequestHandler } from "express";

//typeorm entities and repositories
import { getCustomRepository } from "typeorm";
import { Users } from "../src/entity/Users";
import { UsersRepository } from "./repositories/UsersRepository";

//JWT CONFIG
const SECRET = "PUT_YOUR_RANDOM_SECRET_STRING_HERE";
const TOKEN_EXPIRE = "99y";

//define user req func
export const reqUser = (user: Users) => {
  return {
    id: user.id,
    username: user.username,
    password: user.password
  };
};

//passport local strategy => auth with id and password
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
    if (await user.comparePassword(password)) return done(null, reqUser(user));

    //invalid password
    return done(null, false);
  }
);

//passport beare strategy => auth with token
passport.use(
  new BeareStrategy((token, done) => {
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        //if token expired
        if (err instanceof jwt.TokenExpiredError)
          return done("PUT_YOUR_TOKEN_EXPIRED_ERROR", false);

        //if token invalid
        if (err instanceof jwt.JsonWebTokenError)
          return done("PUT_YOUR_INVALID_TOKEN_ERROR", false);
      }

      //error
      return done(err, false);
    });
  })
);

//authenticate part
const authenticate: RequestHandler = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    //error exists
    if (err) return next(err);

    //no user
    if (!user) return next("PUT_YOUR_LOGIN_FAILED_ERROR");

    req.user = user;
    next();
  })(req, res, next);
};

const serialize: RequestHandler = (req, res, next) => {
  req.user.loginedAt = new Date();
  next();
};

export const generateAccessToken = user => {
  return jwt.sign(user, SECRET, { expiresIn: TOKEN_EXPIRE });
};

const generateTokens: RequestHandler = async (req, res, next) => {
  const user = getCustomRepository(UsersRepository);
};

export const authenticates: RequestHandler[] = [
  authenticate,
  serialize,
  generateTokens
];
