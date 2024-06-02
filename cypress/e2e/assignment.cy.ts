import {HomePage} from "./pageClasses/homePage.cy"
import {AboutUs} from "./pageClasses/aboutUsPage.cy";
import {URL} from '../fixtures/constants'

describe('Testlio', () => {
  it('first test case', () => {
    const homepage = new HomePage;
    const aboutus = new AboutUs

    // go to the testlio website homepage
    cy.visit(URL.url)

    // print out the title of the homepage which says 'Your trusted partner in critical testing moments'
    cy.title().then((title:string) => {
      console.log(title);
    })

    // click on about
    homepage.getAboutInNavBar()

    // click on learn more link
    homepage.getLearnMoreLinkInAboutModal()

    // locate and print out text 'We power fused software testing to enable human possibilities' 
    aboutus.getMajorHeadingText()
    })
})