// index.js — Express.js Server (Preview)
import express from 'express';
import "dotenv/config";
const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // Middleware: แปลง JSON

// Routes
app.get('/', (req, res) => {
res.json({ message: 'สวัสดีจาก Express.js!'})
});
app.listen(PORT, () => {
    console.log(`Sever runnig on http://localhost:${PORT}`);
});