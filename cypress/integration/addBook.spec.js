const bookName = "The little prince";
const bookAuthor = "Antoine de Saint";

const bookNameCanceled = "The little prince-canceled";
const bookAuthorCanceled = "Antoine de Saint-Exupéry-canceled";

describe("When the user wants to create a book", () =>{

    before("", () =>{

        cy.clearCookies();

        cy.visit("https://cicd-books-front.herokuapp.com/");
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get("#name").type(bookName);
        cy.get("#author").type(bookAuthor);
        cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click();

        cy.contains('10 / page').click();
        cy.contains('50 / page').click();

    });

    after("Then should remove the book created", () =>{
        cy.get("table").contains('tr', bookName).invoke("index").then((i) =>{
          
            cy.get(`:nth-child(${i+1}) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input`).click();
        })
        cy.get('[nztype="default"]').click();
    });
    

    it("Then the book should be listed with the right name", () =>{

        cy.get('table').contains('td', bookName).should('be.visible');

    });


    it("Then the book should be listed with the right author", () =>{
        cy.get('table').contains('td', bookAuthor).should('be.visible');
    });

});

describe("When the user wants to cancel the creation of a book", () =>{

    before("", () =>{

        cy.clearCookies();

        cy.visit("https://cicd-books-front.herokuapp.com/");
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get("#name").type(bookNameCanceled);
        cy.get("#author").type(bookAuthorCanceled);
        cy.get('.ant-modal-footer > [nztype="default"] > .ng-star-inserted').click();
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();

    });

    it("Then the book should be listed with the right name", () =>{

        cy.get('table').contains('td', bookName).should('not.exist');

    });


    it("Then the book should be listed with the right author", () =>{
        cy.get('table').contains('td', bookAuthor).should('not.exist');
    });

});

describe("When the user wants to create a book without name", () =>{

    before("", () =>{

        cy.clearCookies();
        cy.visit("https://cicd-books-front.herokuapp.com/");
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get("#name").type(bookName); 

    });

    it("Then the save button should be disabled", () =>{
       
        cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");

    });
    

});

describe("When the user wants to create a book without author", () =>{

    before("", () =>{

        cy.clearCookies();
        cy.visit("https://cicd-books-front.herokuapp.com/");
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get("#author").type(bookAuthor);

    });

    it("Then the save button should be disabled", () =>{
       
        cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");

    });
    

});