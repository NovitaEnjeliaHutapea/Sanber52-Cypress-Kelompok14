class changePasswordPage {
    currentPassword = '#current-password'
    newPassword = '#password'
    confirmPassword = '#password-confirmation'
    saveBtn = '#form-validate > .actions-toolbar > div.primary > .action > span'

    clickSave () {
        cy.get(this.saveBtn).click()
    }
}
export default new changePasswordPage()