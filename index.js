const express = require('express');
const app = express();

app.get('/:number', (req, res) => {
  const { number } = req.params;
  const phone = number.replace(/[^0-9]/g, '');
  res.redirect(`tel:${phone}`);
});

app.listen(process.env.PORT, () => {
  console.log(`App is running`);
});
