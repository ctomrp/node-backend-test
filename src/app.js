import express from "express";
import personaRoutes from './routes/persona.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json() )

app.use(indexRoutes);
app.use('/api', personaRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
});

export default app;