import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'; 
import 'dotenv/config';
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';

// Initialize express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection and start server logic in async function
async function startServer() {
  try {
    await connectDB();

    // Routes
    app.get('/', (req, res) => {
      res.send("API is working");
    });
    
    app.get("/debug-sentry", function mainHandler(req, res) {
      throw new Error("My first Sentry error!");
    });
    
  app.post('/webhooks',clerkWebhooks)

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}


Sentry.setupExpressErrorHandler(app);

startServer();
