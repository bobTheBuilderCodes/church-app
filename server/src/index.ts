import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import churchMemberRoutes from './routers/members';

dotenv.config();
const PORT = process.env.PORT || 5001;

export const app = express();

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.get("/", (req, res)=>{
    res.send("Hello world")
})
app.use('/api/v1', churchMemberRoutes); 



async function startApp() {
    try {
        console.log("Connecting to DB...");
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("Connected to DB successfully");
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
    } catch (error) {
        console.log("Error connecting to database", error);
    }
}

startApp();
