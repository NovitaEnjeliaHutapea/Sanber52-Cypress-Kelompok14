/// <reference types="cypress" />


describe('Testing Website Magento', () => {
  
  it('Can Create an account?', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')

    cy.get('#firstname').type("Novita");

    cy.get('#lastname').type("Hutapea");

    cy.get('#email_address').type("novitahutapea28@gmail.com");

    cy.get('#password').type("123456789");


   
  }) 

  it('Can Login?', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
  
   cy.get('input[type="email"]').type("novitahutapea28@gmail.com");
   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("123456789");
  
   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
  })


  
})
