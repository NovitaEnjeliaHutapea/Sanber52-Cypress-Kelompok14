class Product {

    btnChooseMenu = '#ui-id-6 > :nth-child(2)'
    btnChooseCategory = '.categories-menu > .items > :nth-child(1) > a'
    btnChooseProduct = ':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo'
    btnAddToCart = '#product-addtocart-button > span'

    visitHomepage(){
        cy.visit('')
    }

    doChooseMenu(){
        cy.get(this.btnChooseMenu).click()
    }

    doChooseCategory(){
        cy.get(this.btnChooseCategory).click()
    }

    doChooseProduct(){
        cy.get(this.btnChooseProduct).click()
    }

    doAddtoCart(){
        cy.get(this.btnAddToCart).click()
    }
}

export default new Product()