const express = require('express');
const sgMail = require('../services/sendgrid');

const router = express.Router();

router.post('/api/mail', async (req, res) => {
  const { to, subject, text, html, sandboxMode = false } = req.body;

  const msg = {
    to,
    from: 'rojasleon.dev@gmail.com',
    subject,
    text,
    html,
    mail_settings: {
      sandbox_mode: {
        enable: sandboxMode
      }
    }
  };

  try {
    await sgMail.send(msg);
  } catch (err) {
    return res.status(err.code).send(err.message);
  }

  res.status(201).send({ success: true });
});

module.exports = router;
