import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Message Schema
const messageSchema = new mongoose.Schema({
  role: String,
  timestamp: String,
  content: String,
  scores: [{
    emotion: String,
    score: String
  }],
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:dG7UPyfjurPaRUxB@ragim.l0t1l.mongodb.net/journaldb?retryWrites=true&w=majority&appName=ragim')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// API endpoint to save message
app.post('/api/messages', async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Error saving message' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});