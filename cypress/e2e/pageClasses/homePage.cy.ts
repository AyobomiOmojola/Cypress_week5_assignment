class HomePage {
    about_in_navbar:string = '#about';
    learnmore_link_in_aboutmodal:string = '#megamenu-27261 .link'


    getAboutInNavBar():Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.about_in_navbar)
    }
    getLearnMoreLinkInAboutModal():Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.learnmore_link_in_aboutmodal)
    }

}

export default HomePage;
