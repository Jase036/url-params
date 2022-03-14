const express = require('express');
const PORT = 6000;

const app = express();

app.get('/params/:paramVariable', (req, res) => {
    const { paramVariable } = req.params;
    res.status(200).json({ status:200, message: `The URL Param value is: ${paramVariable}`});
});

app.get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is not the data you're looking for.",
    });
  })


const server = app.listen(PORT, function() {
    console.info('🌍 Listening on port ' + server.address().port);
  });