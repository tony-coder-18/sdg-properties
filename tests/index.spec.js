const request = require('supertest');
const app = require("../app");

describe('GET /forsale', () => {
    
    test('should respond with 200 status code', async () => {
        const response = await request(app).get("/api/v1/forsale")
        expect(response.statusCode).toBe(200);
    });
    
});

describe('GET /presale', () => {
    
    test('should respond with 200 status code', async () => {
        const response = await request(app).get("/api/v1/presale")
        expect(response.statusCode).toBe(200);
    });
    
});

describe('GET /sold', () => {
    
    test('should respond with 200 status code', async () => {
        const response = await request(app).get("/api/v1/sold")
        expect(response.statusCode).toBe(200);
    });
    
});
