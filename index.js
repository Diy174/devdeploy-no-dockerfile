// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family:sans-serif;text-align:center;padding:50px;background:#0f1923;color:white">
        <h1>🤖 Auto-Deployed!</h1>
        <p style="color:#00ff88">No Dockerfile needed — DevDeploy generated one!</p>
      </body>
    </html>
  `);
});

app.listen(3000, '0.0.0.0', () => console.log('Running on 3000'));
