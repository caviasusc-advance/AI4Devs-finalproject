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

describe('POST /accounts', () => {
    let dbInstance;

    beforeEach(() => {
        dbInstance = db();
        dbInstance.mockClear(); // Limpia el mock antes de cada test
    });

    it('should create a new account successfully', async () => {
        const newAccount = {
            account_type: 'savings',
            initial_balance: 1000,
            user_id: 1
        };
        dbInstance.insert.mockReturnThis();
        dbInstance.where.mockReturnThis();
        dbInstance.first.mockResolvedValue(undefined);
        dbInstance.returning.mockResolvedValue([{
            account_number: 'account_number',
            account_type: newAccount.account_type,
            balance:newAccount.initial_balance,
            user_id: 1,
            created: new Date(),
            created_by: 'system',
            updated: new Date(),
            updated_by: 'system'
        }]); // Simula la inserción en la base de datos
        const response = await request(app)
            .post('/accounts')
            .send(newAccount);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('account_number');
        expect(response.body.account_type).toBe(newAccount.account_type);
        expect(response.body.balance).toBe(newAccount.initial_balance);
    });

    it('should return an error if required fields are missing', async () => {
        const newAccount = {
            account_type: 'savings'
        };

        const response = await request(app)
            .post('/accounts')
            .send(newAccount);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });

    it('should return an error if account number generation fails', async () => {
        const newAccount = {
            account_type: 'savings',
            initial_balance: 1000,
            user_id: 1
        };
        dbInstance.insert.mockReturnThis();
        dbInstance.where.mockReturnThis();
        dbInstance.first.mockResolvedValue(undefined);

        // Simula la falla en la generación del número de cuenta
        jest.spyOn(Math, 'random').mockReturnValue(0.999999999999);

        const response = await request(app)
            .post('/accounts')
            .send(newAccount);
            
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
        
        // Restaura el Math.random original
        Math.random.mockRestore();
    });
});