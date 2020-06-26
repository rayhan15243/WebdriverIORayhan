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

})




})