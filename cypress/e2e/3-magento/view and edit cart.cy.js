describe('View and edit cart', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })

  it('view cart when cart is empty', () => {
    cy.get('.minicart-wrapper > .action').click()
    cy.get('.cart-empty').should('be.visible')
  })

  it('add product to cart', () => {
    cy.get(':nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#qty').clear().type(2)
    cy.get('#product-addtocart-button').click()
    cy.get('.counter-number').should('be.visible')
  })

  it('view and edit cart', () => {
    cy.get(':nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#qty').clear().type(2)
    cy.get('#product-addtocart-button').click()
    cy.get('.minicart-wrapper > .action').click()
    cy.get('.counter-number').should('be.visible')
    cy.get('.minicart-wrapper > .action').click()
    cy.get(':nth-child(7) > .secondary > .action > span').click()
    cy.get('.action-edit').click()
    cy.get('#option-label-size-143-item-169').click()
    cy.get('#option-label-color-93-item-57').click()
    cy.get('#qty').clear().type(3)
    cy.get('#product-updatecart-button').click()
  })

  it('view and delete product', () => {
    cy.get(':nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#qty').clear().type(1)
    cy.get('#product-addtocart-button').click()
    cy.get('.minicart-wrapper > .action').click()
    cy.get('.counter-number').should('be.visible')
    cy.get('.minicart-wrapper > .action').click()
    cy.get(':nth-child(7) > .secondary > .action > span').click()
    cy.get('.action-delete').click()
  })
    
})