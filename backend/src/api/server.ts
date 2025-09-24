import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import apiRoutes from './routes.ts'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});