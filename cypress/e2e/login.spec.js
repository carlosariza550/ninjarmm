/// <reference types="cypress" />

describe('NinjaRMM Login Functionality', () => {

  let loginData;
  
  before(() => {
    cy.fixture('testData').then((data)=>{
      loginData = data;
    });
  });

  beforeEach(() => {
    cy.clearAllCookies();
    cy.visit('/login');
  });

  context('Login Page Elements', () => {
    it('Verify all required elements are present', () => {
      cy.get('input[name="email"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');
      cy.get('input[type="checkbox"]').should('be.visible'); // Stay connected checkbox
      cy.get('button[type="submit"]').should('be.visible'); // Login button
      cy.get('[href="#/resetPassword"]').should('be.visible'); // Forgot Password link
      cy.get('[href="#/register"]').should('be.visible'); // Register link
    });
  });
  
  context('Login Functionality', () => {
    it('Successful login with valid credentials', () => {
      cy.get('input[name="email"]').type(loginData.validUser.email);
      cy.get('input[name="password"]').type(loginData.validUser.password);
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/auth'); // Adjust the URL as necessary for the dashboard
    });

    it('Error message for invalid credentials', () => {
      cy.get('input[name="email"]').type(loginData.invalidUser.email);
      cy.get('input[name="password"]').type(loginData.invalidUser.password);
      cy.get('button[type="submit"]').click();
      cy.get('.alert').should('contain', 'Human verification failed'); // Adjust selector as necessary
    });
  });

  context('Input Field Validations', () => {
    it('Email field validation', () => {
      cy.get('input[name="password"]').type(loginData.validUser.password);
      cy.get('button[type="submit"]').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Error during login');
      });
    });

    it('Invalid email format', () => {
      cy.get('input[name="email"]').type(loginData.emailValidation.invalidFormat);
      cy.get('input[name="password"]').type(loginData.validUser.password);
      cy.get('button[type="submit"]').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Error during login');
      });
    });

    it('Password field validation', () => {
      cy.get('input[name="email"]').type(loginData.validUser.email);
      cy.get('button[type="submit"]').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Error during login');
      });
    });
  });

  context('Other links', () => {
    it('Redirects to reset password page', () => {
      cy.get('[href="#/resetPassword"]').click();
      cy.url().should('include', '/resetPassword'); // Adjust the URL as necessary for the reset password page
    });

    it('Redirects to register page', () => {
      cy.get('[href="#/register"]').click();
      cy.url().should('include', '/register'); // Adjust the URL as necessary for the reset password page
    });
  });
});