//npx wdio wdio.conf.js
const internetPage = require ("../page-objects/internet.page")
describe("Interacting with elements", function() {

it ("Get text for elements", () => {

    browser.url('/')
    // let text = $("h2").getText()
    // let text = $(".heading").getText()
    let text = $("#page-footer").getText()
    console.log(text)
    internetPage.getLiText()
    internetPage.getSpecificElementText(3) 
})

it("Is Footer Displayed", () => {
    console.log(internetPage.pageFooter.isDisplayed())
})

it("Does the header exist", () => {
    console.log(internetPage.pageHeader.isExisting())
})

it("Is footer in viewport?", () => {
    console.log(internetPage.pageFooter.isDisplayedInViewport())
})

it("Is header in viewport?", () => {
    console.log(internetPage.pageHeader.isDisplayedInViewport())
})

it("Is subheader enabled?", () => {
    console.log(internetPage.subHeading.isEnabled())
})


it("Click Element", () => {
    internetPage.clickOnLink()
})

})