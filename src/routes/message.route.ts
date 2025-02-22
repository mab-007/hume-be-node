// src/routes/ping.router.ts
import { Request, Response } from 'express';
import { BaseRouter } from './base.router';
import Message from '../entity/message.entity';

class MessageRoute extends BaseRouter {
  constructor() {
    super(); // Call the constructor of the BaseRouter class
  }

  routes(): void {
    this.router.post('/messages', async (req: Request, res: Response) => {
        try {
            const message = new Message(req.body);
            await message.save();
            res.status(201).json(message);
          } catch (error) {
            res.status(500).json({ error: 'Error saving message' });
          }
    });
  }
}

export default new MessageRoute();