class internetPage{

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


    figures(index) { return $(`.example .figure:nth-child(${index}) img`) }
    figureDetails(index) { return $(`.example .figure:nth-child(${index}) .figcaption h5`) }

    get target() { return $(`.example #target`) }
    get result() { return $(`.example #result`) }

    get hereLink() { return $(`.example a`) }

    get iframeBody() { return $('#tinymce') }
    get iframe() { return $('#mceu_27 #mce_0_ifr') }


    get columnA() { return $('#column-a') }
    get columnB() { return $('#column-b') }


    get columnAHeader() { return $('#column-a header') }
    get columnBHeader() { return $('#column-b header') }

    get draggable() { return $('#draggable') }
    get droppable() { return $('#droppable') }
    get droppableParagraph() { return $('#droppable p') }

    get dropdownMenu() { return $('#dropdown') }
    get dropdownMenuOption1() { return $('#dropdown option:nth-child(2)') }
    get dropdownMenuOption2() { return $('#dropdown option:nth-child(3)') }

    get enableButton() { return $('#input-example button') }
    get inputEnabledField() { return $('#input-example input') }

   
    javascriptAlertButton(index) { return $(`.example li:nth-child(${index}) button`) }

    get exampleButton() { return $('.example button') }
    deleteButton(index) { return $('#elements button:nth-child(${index})') }

    get pageButton() { return $('#checkbox-example button') }


    // Click the Page Button

    clickPageButton() {
    this.pageButton.waitForDisplayed()
    this.pageButton.click()
    }



    // Click the Example Button
    clickExampleButton() {
        this.exampleButton.waitForDisplayed()
        this.exampleButton.click()
    }


    // Clicks the delete button

    clickDeleteButton(index) {
        this.deleteButton(index).waitForDisplayed()
        this.deleteButton(index).click()
    } 





    
    // Click the Enable/Disable Button

    clickEnableButton() {
        this.enableButton.waitForDisplayed()
        this.enableButton.click()
    }


   // Click the specified javascript alert button

    clickJavascriptAlertButton(index) {
        this.javascriptAlertButton(index).waitForDisplayed()
        this.javascriptAlertButton(index).click()
    }

    
    // Click the dropdown Button

    clickDropdownMenu() {
        this.dropdownMenu.click()
    }

    clickDropdownMenuOption1() {
        this.dropdownMenuOption1.waitForDisplayed()
        this.dropdownMenuOption1.click()
    } 

    clickDropdownMenuOption2() {
        this.dropdownMenuOption2.waitForDisplayed()
        this.dropdownMenuOption2.click()
    } 



    // Drag and drop

    dragDraggableToDroppable() {
        this.draggable.waitForDisplayed()
        this.draggable.dragAndDrop(this.droppable)
    }

    // Drag box A to box B

    dragColumnAToColumnB() {
        this.columnA.waitForDisplayed()
        this.columnA.dragAndDrop(this.columnB)
    }

    // Enter text in the iframe
    sendTextToBody(text) {

        this.iframeBody.waitForDisplayed()
        this.iframeBody.clearValue()
        this.iframeBody.click()
        this.iframeBody.keys(text)

    }

    
    // Click the "click here" link
    clickHereLink() {
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    }


    // scrolls to the page footer
    scrollToPageFooter() {
        this.pageFooter.moveTo()
    }


    // Clicks the target input field
    clickTarget() {
        this.target.waitForDisplayed()
        this.target.click()
    }

    // Send keyboard keys to Target
    sendKeysToTarget(text) {

        this.target.waitForDisplayed()
        this.target.keys(text)
    }

    // return the text of the return element

    getResultText() {

            this.result.waitForDisplayed()
            return this.result.getText()
        }


    
    // Hovers over the specified image
    hoverOnFigure(index) {
        this.figures(index).waitForDisplayed()
        this.figures(index).moveTo(1, 1)
    }

    // Returns the text of the figure details
    getFigureDetailsText(index) {
    
        this.figureDetails(index).waitForDisplayed()
        return this.figureDetails(index).getText()
    
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
module.exports = new internetPage()