const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', (req, res) => {
  res.redirect('/');
});

router.get('/:id', async (req, res) => {
  const countryName = req.params.id;
  const encodedName = encodeURIComponent(countryName);
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${encodedName}?fullText=true`);
    if (!response.ok) {
      throw new Error(`Erro de resposta da API Status: ${response.status}`);
    }
    const [data] = await response.json();
    res.render("country", data);
  } catch (error) {
    res.redirect('/notFound');
  }
});

module.exports = router;