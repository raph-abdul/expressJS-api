// routes/unsubscribe.js
/**
 * @swagger
 * /unsubscribe:
 *   post:
 *     summary: Store subscription cancellation actions
 *     responses:
 *       200:
 *         description: A successful response
 */
const express = require('express');
const router = express.Router();

router.get('/sample', (req, res) => {
  res.json({ message: 'This is a sample message' });
});

module.exports = router;
