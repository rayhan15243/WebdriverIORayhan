internetPages = require ("../page-objects/internet.page")
// npm test -- --spec practise/switchToIframe.test.js

describe('Switch to Iframe', function () {
    it('Should switch to iframe', () => {
        browser.url(`${browser.options.baseUrl}/iframe`)
        internetPages.h3Header.waitForDisplayed()
        internetPages.iframe.waitForDisplayed()
        browser.switchToFrame(internetPages.iframe)
        internetPages.sendTextToBody('This is the text in the iframe body')
        assert.equal('This is the text in the iframe body', internetPages.iframeBody.getText())
    })
})