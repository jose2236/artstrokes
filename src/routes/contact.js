const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, phone, business, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ ok: false, error: 'Nombre y teléfono son requeridos.' });
  }

  // Log the lead (replace with email/CRM integration as needed)
  console.log('New lead:', { name, email, phone, business, message, at: new Date().toISOString() });

  res.json({ ok: true, message: '¡Gracias! Te contactamos en menos de 24 horas.' });
});

module.exports = router;
