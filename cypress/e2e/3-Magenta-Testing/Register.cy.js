/// <reference types="cypress" />


describe('Testing Website Magento', () => {
  
    it('Can Create an account?', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  
      cy.get('#firstname').type("Novita");
  
      cy.get('#lastname').type("Hutapea");
  
      cy.get('#email_address').type("novitahutapea28@gmail.com");
  
      cy.get('#password').type("123456789");
  
  
     
    }) 
  
    
    
  })
  