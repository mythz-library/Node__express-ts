import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.status(200).send("API working")
})

app.listen(8000, () => {
    console.log('Server Started')
})