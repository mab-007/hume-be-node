// src/routes/ping.router.ts
import { Request, Response } from 'express';
import { BaseRouter } from './base.router';

class HumeRoute extends BaseRouter {
  constructor() {
    super(); // Call the constructor of the BaseRouter class
  }

  routes(): void {
    this.router.get('/hume', (req: Request, res: Response) => {
      res.status(200).json({ message: 'Pong!' });
    });
  }
}

export default new HumeRoute();