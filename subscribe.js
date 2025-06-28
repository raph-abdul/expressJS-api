// routes/subscription.js
/**
 * @swagger
 * /subscribe:
 *   post:
 *     summary: Store subscription actions
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
