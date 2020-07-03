internetPages = require ("../page-objects/internet.page")
// npm test -- --spec practise/switchWindow.test.js


describe('Switch Window', function () {
    it('Should switch to the next window', () => {
        browser.url(`${browser.options.baseUrl}/windows`)
        internetPages.clickHereLink()
        browser.switchWindow(`${browser.options.baseUrl}/windows/new`)
        assert.equal(true, internetPages.h3Header.isExisting())
        assert.equal(true, internetPages.h3Header.isDisplayed())
        assert.equal('New Window', internetPages.h3Header.getText())
    })
})