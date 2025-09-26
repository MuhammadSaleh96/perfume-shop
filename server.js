const express = require('express');
const app = express();

// Use the OpenShift port if set, otherwise default to 8080
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('<h1>Perfume Shop</h1>');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});