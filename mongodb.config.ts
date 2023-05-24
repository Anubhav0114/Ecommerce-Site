// mongodb.config.ts
import mongoose from 'mongoose';

export async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://nitesh:3.3gl1234@cluster0.3sghflt.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}