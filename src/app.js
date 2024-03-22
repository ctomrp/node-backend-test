import express from "express";
import personRoutes from './routes/person.routes.js';
import sexRoutes from './routes/sex.routes.js';

const app = express();

app.use(express.json() )

app.use('/api', personRoutes);
app.use('/api', sexRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
});

export default app;