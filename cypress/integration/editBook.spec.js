const bookName = "The little prince";
const bookAuthor = "Antoine de Saint-Exupéry";
const bookNameEdited = "The Analyst";
const bookAuthorEdited = "John Katzenbach";

describe("When the user wants to edit a book", () =>{

    before("", ()=>{

        cy.clearCookies();

        cy.visit("https://cicd-books-front.herokuapp.com/");
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.wait(1000);
        cy.get("#name").type(bookName);
        cy.get("#author").type(bookAuthor);
        cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click();

        cy.contains('10 / page').click();
        cy.contains('50 / page').click();

        cy.get("table").contains('tr', bookName).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > :nth-child(4) > .ant-btn`).click();

        });
        cy.get("#name").clear().type(bookNameEdited);
        cy.get("#author").clear().type(bookAuthorEdited);    
        cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click();    

    })

    after("Then should remove the book created", () =>{
        cy.get("table").contains('tr', bookNameEdited).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input`).click();
        })
        cy.get('[nztype="default"]').click();
    });

    it("Then the book should have the new name", ()=>{
        cy.get('table').contains('td', bookNameEdited).should('be.visible');
    })

    it("Then the book should have the new author", ()=>{
        cy.get('table').contains('td', bookAuthorEdited).should('be.visible');
    })

    it("Then the book with the old name should not exist", ()=>{
        cy.get('table').contains('td', bookName).should('not.exist');
    })

    it("Then the book with the old author should not exist", ()=>{
        cy.get('table').contains('td', bookAuthor).should('not.exist');
    })

})


describe("When the user wants to cancel the edition of a book", () =>{

    before("", ()=>{

        cy.clearCookies();

        cy.visit("https://cicd-books-front.herokuapp.com/");
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.wait(1000);
        cy.get("#name").type(bookName);
        cy.get("#author").type(bookAuthor);
        cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click();

        cy.contains('10 / page').click();
        cy.contains('50 / page').click();

        cy.get("table").contains('tr', bookName).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > :nth-child(4) > .ant-btn`).click();

        });
        cy.get("#name").clear().type(bookNameEdited);
        cy.get("#author").clear().type(bookAuthorEdited);    
        cy.get('.ant-modal-footer > [nztype="default"] > .ng-star-inserted').click();   

    });

    after("Then should remove the book created", () =>{
        cy.get("table").contains('tr', bookName).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input`).click();
        })
        cy.get('[nztype="default"]').click();
    });

    it("Then the book should not have the new name", ()=>{
        cy.get('table').contains('td', bookNameEdited).should('not.exist');
    })

    it("Then the book should not have the new author", ()=>{
        cy.get('table').contains('td', bookAuthorEdited).should('not.exist');
    })

    it("Then the book with the initial name should exist", ()=>{
        cy.get('table').contains('td', bookName).should('be.visible');
    })

    it("Then the book with the initial author should exist", ()=>{
        cy.get('table').contains('td', bookAuthor).should('be.visible');
    })

});

describe("When the user wants to edit a book without author", () =>{

    before("", ()=>{

        cy.clearCookies();

        cy.visit("https://cicd-books-front.herokuapp.com/");
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.wait(1000);
        cy.get("#name").type(bookName);
        cy.get("#author").type(bookAuthor);
        cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click();

        cy.contains('10 / page').click();
        cy.contains('50 / page').click();

        cy.get("table").contains('tr', bookName).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > :nth-child(4) > .ant-btn`).click();

        });
        cy.get("#name").clear().type(bookNameEdited);
        cy.get("#author").clear();   

    });

    after("Then should remove the book created", () =>{
        cy.get('.ant-modal-footer > [nztype="default"] > .ng-star-inserted').click(); 
        cy.get("table").contains('tr', bookName).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input`).click();
        })
        cy.get('[nztype="default"]').click();
    });

    it("Then the save button should be disabled", ()=>{
        cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
    })

   
});

describe("When the user wants to edit a book without name", () =>{

    before("", ()=>{

        cy.clearCookies();

        cy.visit("https://cicd-books-front.herokuapp.com/");
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.wait(1000);
        cy.get("#name").type(bookName);
        cy.get("#author").type(bookAuthor);
        cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click();

        cy.contains('10 / page').click();
        cy.contains('50 / page').click();

        cy.get("table").contains('tr', bookName).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > :nth-child(4) > .ant-btn`).click();

        });
        cy.get("#name").clear();
        cy.get("#author").clear().type(bookAuthorEdited);   

    });

    after("Then should remove the book created", () =>{
        cy.get('.ant-modal-footer > [nztype="default"] > .ng-star-inserted').click(); 
        cy.get("table").contains('tr', bookName).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input`).click();
        })
        cy.get('[nztype="default"]').click();
    });

    it("Then the save button should be disabled", ()=>{
        cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
    })

   
})

