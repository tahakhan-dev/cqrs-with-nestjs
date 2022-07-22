import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from 'src/common/verifyToken';

declare global {
  namespace Express {
    interface Request {
      consumerId?: any;
    }
  }
}

@Injectable()
export class AuthenticationUserMiddleware implements NestMiddleware {
  constructor(
  ) { }

  async use(req: Request, res: Response, next: NextFunction) {
    // let { authorization } = req.headers

    // if (authorization == undefined || null) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.FORBIDDEN,
    //       error: 'No token found or enter valid auth token',
    //     },
    //     HttpStatus.FORBIDDEN,
    //   );
    // }

    // const bearer_token = authorization.split(' ');

    // console.log(bearer_token);


    // if (!(bearer_token[0].toLowerCase() === 'bearer' && bearer_token[1] == 'askari_bearer_token')) {
    //   // no auth token or invalid token!
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.FORBIDDEN,
    //       error: 'Token is Invalid',
    //     },
    //     HttpStatus.FORBIDDEN,
    //   );
    // }

    // let isUserVerified = await verifyToken(
    //   bearer_token[1],
    //   function (err, data) {
    //     console.log(data);

    // if (bearer_token) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.FORBIDDEN,
    //       error: 'Token is Expired',
    //     },
    //     HttpStatus.FORBIDDEN,
    //   );
    // } else {
    //   return data;
    // }
    //   },
    // );

    // req.consumerId = isUserVerified.consumer_id

    next();
  }
}
