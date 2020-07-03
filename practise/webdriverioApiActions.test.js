
internetPages = require ("../page-objects/internet.page")
// npm test -- --spec practise/webdriverioApiActions.test.js

describe('WebdriverIO API Actions', function () {
    it('should hover on figure 1', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPages.hoverOnFigure(3)
        assert.equal("name: user1", internetPages.getFigureDetailsText(3))
    }) 

    it('should hover on figure 2', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPages.hoverOnFigure(4)
        assert.equal("name: user2", internetPages.getFigureDetailsText(4))
    }) 

    it('should hover on figure 3', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPages.hoverOnFigure(5)
        assert.equal("name: user3", internetPages.getFigureDetailsText(5))
    }) 

    it('should send keyboard value Backspace', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPages.clickTarget()
        internetPages.sendKeysToTarget("Backspace")
        assert.equal("You entered: BACK_SPACE", internetPages.getResultText())
    })

    it('should send keyboard value Tab', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPages.clickTarget()
        internetPages.sendKeysToTarget("Tab")
        assert.equal("You entered: TAB", internetPages.getResultText())
    
    })
    
    it('should send keyboard value Shift', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPages.clickTarget()
        internetPages.sendKeysToTarget("Shift")
        assert.equal("You entered: SHIFT", internetPages.getResultText())
    })
}) 