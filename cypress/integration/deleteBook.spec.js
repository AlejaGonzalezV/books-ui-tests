describe("When the user wants to delete a book", () =>{

    const bookName = "The little prince";
    const bookAuthor = "Antoine de Saint-Exupéry";

    before("", ()=>{

        cy.clearCookies();

        cy.visit("https://cicd-books-front.herokuapp.com/");
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get("#name").type(bookName);
        cy.get("#author").type(bookAuthor);
        cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click();

        cy.contains('10 / page').click();
        cy.contains('50 / page').click();

        cy.get("table").contains('tr', bookName).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input`).click();
        })
        cy.get('[nztype="default"]').click();

    })

    it("Then the book should not be listed", ()=>{
        cy.get('table').contains('td', bookName).should('not.exist');
    })

})

