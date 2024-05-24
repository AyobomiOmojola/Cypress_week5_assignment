class AboutUs {
    major_heading_text:string = '#we-power-fused-software-testing-to-enable-human-possibilities';


    getMajorHeadingText():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.major_heading_text);
    }

}

export default AboutUs;
