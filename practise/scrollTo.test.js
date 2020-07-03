internetPages = require ("../page-objects/internet.page")
// npm test -- --spec practise/scrollTo.test.js

describe('Scroll to Element', function () {
    it.skip('should scroll to the footer', () => {
        browser.url('/')
        internetPages.pageHeader.waitForDisplayed()
        internetPages.scrollToPageFooter()
        assert.equal(true, internetPages.pageFooter.isDisplayedInViewport())
    })

    it('should scroll into view', () => {
        browser.url('/')
        internetPages.pageFooter.scrollIntoView()
        assert.equal(true, internetPages.pageFooter.isDisplayedInViewport())
        browser.pause(3000)
    })
}) 