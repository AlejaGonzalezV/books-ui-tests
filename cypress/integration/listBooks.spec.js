describe("When the user list the books", () =>{
    before("", ()=>{
        cy.clearCookies();
        cy.visit("https://cicd-books-front.herokuapp.com/");
    });

    it("At least one book should be listed", () =>{
        
        cy.get('table').find('tr').should('have.length.greaterThan', 0);
      
    });

})