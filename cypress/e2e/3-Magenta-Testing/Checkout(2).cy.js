class Checkout {

    btnCart = '.showcart'
    btnCheckout = '#top-cart-btn-checkout'
    btnNext = '.button > span'
    btnPlaceOrder = '.payment-method-content > :nth-child(4) > div.primary > .action > span'
    btnContinueShopping = '.checkout-success > .actions-toolbar > div.primary > .action > span'
    btnChooseShipping = ':nth-child(1) > :nth-child(1) > .radio'

    clickCart(){
        cy.get(this.btnCart).click()
    }

    clickCheckout(){
        cy.get(this.btnCheckout).click({force: true})
    }

    clickNext(){
        cy.get(this.btnNext).click()
    }

    doPlaceOrder(){
        cy.get(this.btnPlaceOrder).click();
    }

    doContinueShopping(){
        cy.get(this.btnContinueShopping).click();
    }

    // For without sign in

    fillShippingDetail(){
        cy.get('#customer-email-fieldset > .required > .control > #customer-email').type("latihan.qa2@gmail.com").should('have.value', "latihan.qa2@gmail.com")
        cy.get('input[name="firstname"]').type("Grace").should('have.value', "Grace")
        cy.get('input[name="lastname"]').type("Robert").should('have.value', "Robert")
        cy.get('input[name="street[0]"]').type("New York Street").should('have.value', "New York Street")
        cy.get('input[name="city"]').type("Seattle").should('have.value', "Seattle")
        cy.get('select[name="region_id"]').select("62").should('have.value', "62")
        cy.get('input[name="postcode"]').type("12345").should('have.value', "12345")
        cy.get('select[name="country_id"]').select("US").should('have.value', "US")
        cy.get('input[name="telephone"]').type("123456789").should('have.value', "123456789")
    }

    doChooseShipping(){
        cy.get(this.btnChooseShipping).click()
    }
}

export default new Checkout()