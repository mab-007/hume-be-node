import mongoose from 'mongoose';


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

export default Message;
  