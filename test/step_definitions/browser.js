import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:8080';

Given(/^the "([^"]*)" page is open$/, (path) => {
    cy.visit(`${url}/${path}`);
});

Then(/^the title on the page says "([^"]*)"$/, (check) => {
    cy.title().should('include', check);
});

Then(/^the "([^"]*)" page should be open$/, (path) => {
    cy.location()
        .should((location) => {
            expect(location.pathname).to.eq(path);
        });
});
