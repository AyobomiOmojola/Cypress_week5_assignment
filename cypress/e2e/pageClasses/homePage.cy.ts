class HomePage {
    about_in_navbar = '#about';
    learnmore_link_in_aboutmodal = '#megamenu-27261 .link'


    getAboutInNavBar(){
        return cy.get(this.about_in_navbar)
    }
    getLearnMoreLinkInAboutModal(){
        return cy.get(this.learnmore_link_in_aboutmodal)
    }

}

export default HomePage;
