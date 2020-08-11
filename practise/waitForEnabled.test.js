internetPages = require ("../page-objects/internet.page")
// npm test -- --spec practise/waitForEnabled.test.js


describe("Wait For Enabled", function () {
    it('should wait for the input field to be enabled', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        internetPages.clickEnableButton()
        internetPages.inputEnabledField.waitForEnabled(4000)
        assert.equal(true, internetPages.inputEnabledField.isEnabled())
        browser.pause(4000)
        browser.debug()
    })

    it('should wait for the input field to be disabled', () => {
        internetPages.clickEnableButton()
        internetPages.inputEnabledField.waitForEnabled(4000, true)
        assert.equal(false, internetPages.inputEnabledField.isEnabled())
    })

}) 