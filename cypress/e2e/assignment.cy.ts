describe('Testlio', () => {
  it('first test case', () => {
    // go to the testlio website homepage
    cy.visit('https://testlio.com/homepage/')

    // print out the title of the homepage which says 'Your trusted partner in critical testing moments'
    cy.title().then((title:string) => {
      console.log(title);
    })

    // locate if an hamburger button is available due to the port
    let hamgurgerButton = cy.get('.header__hamburger')

    // Condition if hamburgerbutton is shown
    if (hamgurgerButton){
    // click on the hamgurger icon to open the nav bar menu
    hamgurgerButton.click()

    // click on about
    cy.get('#about').click()

    // click on learn more link
    cy.get('#megamenu-27261').find('.link').click()

    // locate and print out text 'We power fused software testing to enable human possibilities' 
    cy.get('#we-power-fused-software-testing-to-enable-human-possibilities').then((e) => {
      console.log(e.text());
    })
    // Condition if hamburgerbutton is not shown
    }
    else{
    // click on about
    cy.get('#about').click()

    // click on learn more link
    cy.get('#megamenu-27261').find('.link').click()

    // locate and print out text 'We power fused software testing to enable human possibilities' 
    cy.get('#we-power-fused-software-testing-to-enable-human-possibilities').then((e) => {
      console.log(e.text());
    })
    }
    
  })
})