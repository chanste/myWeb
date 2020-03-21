//type definitions

interface Token {
  accessToken: string;
  refreshToken: string;
}

declare namespace Express {
  interface User {
    id: number;
    username?: string;

    rid?: number;

    loginedAt?: Date;
  }

  interface Request {
    token?: Token;
  }
}
