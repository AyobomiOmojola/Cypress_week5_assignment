import HomePage from "./pageClasses/homePage.cy"
import AboutUs from "./pageClasses/aboutUsPage.cy";

describe('Testlio', () => {
  it('first test case', () => {
    const homepage = new HomePage;
    const aboutus = new AboutUs

    // go to the testlio website homepage
    cy.visit(Cypress.env('url'))

    // print out the title of the homepage which says 'Your trusted partner in critical testing moments'
    cy.title().then((title:string) => {
      console.log(title);
    })

    // click on about
    homepage.getAboutInNavBar().click()

    // click on learn more link
    homepage.getLearnMoreLinkInAboutModal().click()

    // locate and print out text 'We power fused software testing to enable human possibilities' 
    aboutus.getMajorHeadingText().then((e) => {
      console.log(e.text());
    })
    })
})