/// <reference types="cypress" />


describe('Testing Website Magento', () => {
  
  it('Can Login with valid email and password?', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
  
   cy.get('input[type="email"]').type("belaika@gmail.com");
   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("zKpKBMSVTqD*t2e");
  
   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
  })

  it('Can Login with incorrect email/password?', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
  
   cy.get('input[type="email"]').type("novitahutapea28@gmail.com");
   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("123456789");
  
   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
  })

  it('Can Login with empty email?', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
  
   
   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("123456789");
  
   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
  })

  it('Can Login with empty password?', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
  
    cy.get('input[type="email"]').type("novitahutapea28@gmail.com");
   
   
   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
  })
  
})
