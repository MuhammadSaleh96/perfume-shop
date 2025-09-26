const request = require('supertest');
const express = require('express');


const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Perfume Shop</h1>');
});

describe('GET /', () => {
    it('should return Perfume Shop page', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Perfume Shop');
    });
});
