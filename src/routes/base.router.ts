// src/routes/base.router.ts
import { Router, Request, Response } from 'express';

export abstract class BaseRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes(); // Call the routes method to define routes in subclasses
  }

  abstract routes(): void;  // Abstract method to be implemented by subclasses
}