const request = require('supertest');
const app = require('../src/index');
const db = require('../src/db/knex'); // Importa la conexión a la base de datos

jest.mock('../src/db/knex', () => {
    const mKnex = {
        insert: jest.fn().mockReturnThis(),
        select: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        first: jest.fn().mockReturnThis(),
        returning: jest.fn(),
        mockClear: function() {
            this.insert.mockReset();
            this.select.mockReset();
            this.where.mockReset();
            this.first.mockReset();
            this.returning.mockReset();
        }
    };
    return jest.fn(() => mKnex);
});  // Haz mock de la conexión a la base de datos

describe('POST /users', () => {
    let dbInstance;

    beforeEach(() => {
        dbInstance = db();
        dbInstance.mockClear(); // Limpia el mock antes de cada test
    });

    it('should create a new user successfully', async () => {
        const newUser = {
            "id_type": "CC", 
            "id_number": "123456", 
            "name": "test", 
            "email": "testuser@example.com", 
            "password": "password123", 
            "phone": "1234567890", 
            "address": "cll 1", 
            "birth_date": "2000-01-01",
        };

        dbInstance.where.mockReturnThis();
        dbInstance.first.mockResolvedValue(undefined);
        dbInstance.insert.mockReturnThis();
        dbInstance.returning.mockResolvedValue([{
            ...newUser,
            id: 1
        }]); // Simula la inserción en la base de datos

        const response = await request(app)
            .post('/users')
            .send(newUser);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe(newUser.name);
        expect(response.body.email).toBe(newUser.email);
    });

    it('should return an error if required fields are missing', async () => {
        const newUser = {
            name: 'testuser'
        };

        const response = await request(app)
            .post('/users')
            .send(newUser);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });

    it('should return an error if email is already in use', async () => {
        const newUser = {
            username: 'testuser',
            email: 'existinguser@example.com',
            password: 'password123'
        };

        dbInstance.select.mockResolvedValue([newUser]); // Simula la existencia de un usuario con el mismo email

        const response = await request(app)
            .post('/users')
            .send(newUser);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });
});