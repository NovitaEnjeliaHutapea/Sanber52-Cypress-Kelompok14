import Checkout from '../../POM/Checkout'
//import ButtonLogin from '../../POM/ButtonLogin'
import Product from '../../POM/Product'

describe('Magento Testing - Checkout Process', () => {
    beforeEach('Do visit homepage', () => {
      cy.visit('')
    }) 

    it('Proceed to checkout', () => {      
        // Do sign in (bisa dipakai kalau mau dicoba dengan email dan password dibawah)
        // ButtonLogin.clickSignin()
   
        //cy.url().should('include', '/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
  
        //cy.get('input[id="email"]').type("latihan.qa@gmail.com").should('have.value', "latihan.qa@gmail.com");
        //cy.get('input[title="Password"]').type("Ujicoba1234").should('have.value', "Ujicoba1234");
        //ButtonLogin.clickLogin()
 
        //cy.wait(10000)
        
        // Proceed to check out
        Checkout.clickCart() // Click "cart" logo
 
        cy.wait(5000)
 
        Checkout.clickCheckout() // Click "Proceed to Checkout"
 
        cy.wait(2000)
 
        Checkout.clickNext() // going to payment process
 
        cy.wait(5000)
         
        Checkout.doPlaceOrder() // Do place order
         
        cy.wait(5000)
 
        Checkout.doContinueShopping() // will redirecting to main homepage
     })  

    it('Check out - without login', () => {
        // Choosing product
        Product.doChooseMenu() // For example, we will choose 'Gear'
        Product.doChooseCategory() // For example, we will choose 'Bags'
        Product.doChooseProduct() // Choose product
        Product.doAddtoCart() // Adding product to cart 

        cy.wait(10000)

        // Proceed to check out
        Checkout.clickCart() // Click "cart" logo

        cy.wait(5000)

        Checkout.clickCheckout() // Click "Proceed to Checkout" 
        
        cy.wait(5000)

        Checkout.fillShippingDetail() // Fill all shipping details

        Checkout.doChooseShipping() // Choose shipping method

        Checkout.clickNext() // going to payment process

        cy.wait(5000)

        Checkout.doPlaceOrder() // Do place order

        cy.wait(5000)

        Checkout.doContinueShopping() // will redirecting to main
    }) 
})