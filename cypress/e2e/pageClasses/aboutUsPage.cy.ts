class AboutUs {
    major_heading_text = '#we-power-fused-software-testing-to-enable-human-possibilities';


    getMajorHeadingText(){
        return cy.get(this.major_heading_text);
    }

}

export default AboutUs;
