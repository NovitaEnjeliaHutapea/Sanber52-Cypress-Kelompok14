import Checkout from '../POM/Checkout'

describe('Magento Testing - Checkout Process', () => {
    it('Proceed to checkout', () => {
        // Proceed to check out
        Checkout.clickCart() // Click "cart" logo

        Checkout.clickCheckout() // Click "Proceed to Checkout"

        Checkout.clickNext() // going to payment process

        Checkout.doPlaceOrder() // Do place order

        Checkout.doContinueShopping() // will redirecting to main homepage
    })  
})