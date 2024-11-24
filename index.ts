import express from 'express';
import reminderRouter from './routers/reminders'

const app = express();


app.use('/reminders', reminderRouter)

app.get('/', (req, res) => {
    res.status(200).send("API working")
})

app.listen(8000, () => {
    console.log('Server Started')
})