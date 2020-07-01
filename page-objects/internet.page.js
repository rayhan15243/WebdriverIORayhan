class Internet {

    get pageHeader() { return $('h1.heading')}
    get subHeading() { return $('h2') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get h3Header() { return $('h3') }
    get childElements() { return this.parent.$$('li') }
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }
    
    get firstLink() { return $('ul li:nth-child(1) a') }
    link (index) { return $('ul li:nth-child(${index}) a') }

    checkboxes(index) { return $['#checkboxes input:nth-child(${index})']}

    get username() { return $('#username') }
    get password() { return $('#password') }


    figures(index) { return $(`.example .figure:nth-child(${index}) img`)}
    figureDetails(index) { return $(`.example .figure:nth-child(${index}) .figcaption`)}
    
    // Hovers over the specified image
    hoverOnFigure(index) {
        this.figures(index).waitForDisplayed()
        this.figures(index).moveTo(1,1)
    }

    // Returns the text of the figure details
    getHoverDetailsText(index) {
       this.figureDetails(index).waitForDisplayed()
       return  this.figureDetails(index).getText()
    }

    enterUsername(text) {
        this.username.waitForDisplayed()
        this.username.setValue(text)
    }

    enterPassword(text) {
        this.password.waitForDisplayed()
        this.password.setValue(text)
    }

    clickLink(index) {
        this.link(index).waitForDisplayed()
        this.link(index).click()
    }

    clickCheckBox(index) {
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    }

    getLiText () {
        this.childElements.filter((element) => {
                console.log(element.getText())
        })
    }

    getSpecificElementText(index) {
       this.specificChildElement(index).waitForDisplayed()
       return this.specificChildElement(index).getText()
    }
    
    clickOnLink() {
        if (this.firstLink.isDisplayed() === true ) {
            this.firstLink.click()
        }
       

    this.h3Header.waitForDisplayed()
        
       // browser.pause(5000)
    }






}
module.exports = new Internet()