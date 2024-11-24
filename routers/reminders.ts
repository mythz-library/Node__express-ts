import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send("My Reminders")
})

export default router;