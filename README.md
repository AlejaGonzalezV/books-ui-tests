# books-ui-tests

This repository contains e2e tests for the app deployed on: https://cicd-books-front.herokuapp.com

to run tests you have to run:
```
npm install
npm run test:e2e:ui:headless
```

All the test cases are located at cypress/integration/**

Following test cases are covered:

- Tests on listBook.spec.js
  
  - Tests the books table is not empty
  
- Tests on addBook.spec.js

  - Creates a new book and asserts book is listed with the right fields
  - Tests what happen when user wants to create a book without a field
  - After run the tests, deletes the data created 
  
- Tests on editBook.spec.js

  - Creates a new book, updates it and asserts book is listed with the right fields
  - Tests what happen when user wants to edit a book without a field
  - After run the tests, deletes the data created 
  
- Tests on deleteBook.spec.js

   - Creates a new book, deletes it and asserts the book is not listed
  
