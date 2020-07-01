
internetPage = require ("../page-objects/internet.page")

describe('WebdriverIO API Actions', function() {
    it('should hover on figure', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPage.hoverOnFigure(1)
        assert.equal("name: user1", internetPage.getHoverDetailsText(3))
    })
})
