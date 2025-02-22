// src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import pingRoute from './routes/ping.route';
import mongoose from 'mongoose';
import messageRoute from './routes/message.route';

const app = express();
const port = process.env.PORT || 3000;



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:dG7UPyfjurPaRUxB@ragim.l0t1l.mongodb.net/journaldb?retryWrites=true&w=majority&appName=ragim')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Backend!');
});

app.post('/example', (req: Request, res: Response) => {
  const data = req.body;
  console.log('Received data:', data);
  res.json({ message: 'Data received successfully', receivedData: data });
});


// Mount the routers
app.use('/', pingRoute.router); // Mount the PingRouter at the root
app.use('/api', messageRoute.router); // Mount the PingRouter at the root

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});