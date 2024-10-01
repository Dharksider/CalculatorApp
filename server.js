const express = require('express');

const userRouter = require('./routes/calculate')
const app = express();
const PORT = 1080;

app.use(express.json());

app.use('/calculate', userRouter);

app.get('/', (req, res) => {
    res.send('This is the Landing page of my Calculator, Welcome ');
    res.status(200).json
})
app.listen(PORT, () => {
    console.log(`Server on port ${PORT} is running`);
});
