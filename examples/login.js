describe('LoginTest',function(){
    it('LoginTestcase',function(){
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.url().should('include','practicetestautomation.com/logged-in-successfully/')
        cy.get('p strong').should('have.text', 'Congratulations student. You successfully logged in!')
        cy.get('.wp-block-button').click()
    })
})