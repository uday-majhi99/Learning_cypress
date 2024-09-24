// cypress/integration/google_spec.js
describe('Open Google in Chrome', () => {
    it('should open Google homepage', () => {
        // Open Google's homepage
        cy.visit('https://www.google.com');
        
        // Check if the Google logo is visible
        cy.get('img[alt="Google"]').should('be.visible');
    });
});
