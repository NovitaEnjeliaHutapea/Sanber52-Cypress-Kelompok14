class ButtonLogin {
    btnSignin = '.panel > .header > .authorization-link'
    btnLogin = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'

    clickSignin(){
        cy.get(this.btnSignin).click()
    }

    clickLogin(){
        cy.get(this.btnLogin).click()
    }
}

export default new ButtonLogin()