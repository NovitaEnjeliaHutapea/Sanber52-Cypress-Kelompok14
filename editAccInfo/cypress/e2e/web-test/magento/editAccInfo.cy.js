import editAccInfoPageCy from "../../../support/pageObject/editAccInfoPage.cy"
import changePasswordCy from "../../../support/pageObject/magento/changePassword.cy"
const account = require('../../../fixtures/account.json')

describe('Edit Account Information', () => {
  beforeEach (() => {
    cy.visit('')
  
  })
  it ('can change fn and ln', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('tescypress@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Apaya123')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.visit('https://magento.softwaretestingboard.com/customer/account/')
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    
    cy.get('#firstname').clear()
    cy.get('#firstname').type('kambing')

    cy.get('#lastname').clear()
    cy.get('#lastname').type('hitam')

    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.message-success > div').should('contain.text', 'You saved the account information')
  })

  it ('can change password', () => {
    cy.accountLogin('tescypress@gmail.com', '123Apaya')
    editAccInfoPageCy.clickChangPass()
    cy.get(changePasswordCy.currentPassword).type('123Apaya')
    cy.get(changePasswordCy.newPassword).type('Apaya123')
    cy.get(changePasswordCy.confirmPassword).type('Apaya123')
    changePasswordCy.clickSave()
    cy.get('.message-success > div').should('contain.text', 'You saved the account information')
  })

  it ('failed change password - wrong password - fixtures', () => {
    cy.accountLogin(account.valid_email, account.valid_password)
    editAccInfoPageCy.clickChangPass()
    cy.get(changePasswordCy.currentPassword).type(account.new_password)
    cy.get(changePasswordCy.newPassword).type(account.new_password)
    cy.get(changePasswordCy.confirmPassword).type(account.new_password)
    changePasswordCy.clickSave()
    cy.get('.message-error > div').should('contain.text', 'match this account')
  })

  it.only ('failed change password - wrong verify password - fixtures', () => {
    cy.accountLogin(account.valid_email, account.valid_password)
    editAccInfoPageCy.clickChangPass()
    cy.get(changePasswordCy.currentPassword).type(account.valid_password)
    cy.get(changePasswordCy.newPassword).type(account.new_password)
    cy.get(changePasswordCy.confirmPassword).type(account.valid_password)
    changePasswordCy.clickSave()
    cy.get('#password-confirmation-error').should('contain.text', 'Please enter the same value again')
  })

})