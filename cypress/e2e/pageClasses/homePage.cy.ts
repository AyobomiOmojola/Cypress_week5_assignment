import {homepageLocators} from '../../fixtures/Locators/homepage'

class HomePage {
    homepageLocators = homepageLocators
    // about_in_navbar:string = '#about';
    // learnmore_link_in_aboutmodal:string = '#megamenu-27261 .link'


    getAboutInNavBar():Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.homepageLocators.about_in_navbar).click()
    }
    getLearnMoreLinkInAboutModal():Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.homepageLocators.learnmore_link_in_aboutmodal).click()
    }

}

export {HomePage};
