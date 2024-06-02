import {aboutusPage} from '../../fixtures/Locators/aboutus'

class AboutUs {
    aboutusPage = aboutusPage
    // major_heading_text:string = '#we-power-fused-software-testing-to-enable-human-possibilities';

    getMajorHeadingText():Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.aboutusPage.major_heading_text).then((e) => {
        console.log(e.text());})
    }
}

export {AboutUs};
