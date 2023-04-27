describe('dropdown', function(){
    it('dropdown1', function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('select').select(2)
    })
})