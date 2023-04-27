describe("LoginOrange", () => {
    it("LoginOrange Testcase", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('include','OrangeHRM')
    cy.get("input[name='username']").type("admin")
    cy.get("input[type='password']").type("admin123")
    cy.get("button[type='submit']").click()
})
})