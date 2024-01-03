class editAccInfoPage {
    email = '#email'
    pass = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    loginBtn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'
    changePass = '.change-password'

    clickChangPass () {
        cy.get(this.changePass).click()
    }
}
export default new editAccInfoPage()

