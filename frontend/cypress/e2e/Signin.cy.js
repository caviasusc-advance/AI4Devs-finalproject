Cypress.config("defaultCommandTimeout", 10000);


describe('Signin Page', () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env('VITE_BASE_URL')}/signin`);
    });
  
    it('should display the signin form', () => {
      cy.get('form').should('be.visible');
    });
  
    it('should display validation errors for empty fields', () => {
      cy.get('button[type="submit"]').click();
  
      cy.get('#id_type-error').should('contain', 'Requerido');
      cy.get('#id_number-error').should('contain', 'Requerido');
      cy.get('#name-error').should('contain', 'Requerido');
      cy.get('#email-error').should('contain', 'Requerido');
      cy.get('#password-error').should('contain', 'Requerido');
      cy.get('#phone-error').should('contain', 'Requerido');
      cy.get('#address-error').should('contain', 'Requerido');
      cy.get('#birth_date-error').should('contain', 'Requerido');
    });
  
    it('should register a new user successfully', () => {
      cy.get('#id_type').type('CC');
      cy.get('#id_number').type('123456');
      cy.get('#name').type('test');
      cy.get('#email').type('testuser@example.com');
      cy.get('#password').type('password123');
      cy.get('#phone').type('1234567890');
      cy.get('#address').type('cll 1');
      cy.get('#birth_date').type('2000-01-01');
  
      cy.intercept('POST', '/users', {
        statusCode: 201,
        body: {
          id: 1,
          id_type: 'CC',
          id_number: '123456',
          name: 'test',
          email: 'testuser@example.com',
          password: 'password123',
          phone: '1234567890',
          address: 'cll 1',
          birth_date: '2000-01-01',
        },
      }).as('registerUser');
  
      cy.get('button[type="submit"]').click();
  
      cy.wait('@registerUser').its('response.statusCode').should('eq', 201);
      cy.url().should('eq', `${Cypress.env('VITE_BASE_URL')}/`);
    });
  
    it('should display an error message if registration fails', () => {
      cy.get('#id_type').type('CC');
      cy.get('#id_number').type('123456');
      cy.get('#name').type('test');
      cy.get('#email').type('testuser@example.com');
      cy.get('#password').type('password123');
      cy.get('#phone').type('1234567890');
      cy.get('#address').type('cll 1');
      cy.get('#birth_date').type('2000-01-01');
  
      cy.intercept('POST', '/users', {
        statusCode: 400,
        body: {
          error: 'Email already in use',
        },
      }).as('registerUserFail');
  
      cy.get('button[type="submit"]').click();
  
      cy.wait('@registerUserFail').its('response.statusCode').should('eq', 400);
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Email already in use');
      });
    });
  });