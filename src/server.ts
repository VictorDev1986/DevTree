import express from 'express';
const app = express();

//routing
app.get('/', (req, res) => {
   res.send('Hola mundo en express / Typescript!');
});

export default app;