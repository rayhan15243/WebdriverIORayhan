internetPages = require ("../page-objects/internet.page")
// npm test -- --spec practise/javascriptAlerts.test.js

describe('Javascript Alerts', function () {
    it('should get text of alert', () => {
        browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        internetPages.clickJavascriptAlertButton(1)
        assert.equal('I am a JS Alert', browser.getAlertText())
        
    })


    it('should accept alert', () => {
        browser.acceptAlert()
        assert.equal('You successfuly clicked an alert', internetPages.getResultText())
       
    })

    it('should dismiss alert', () => {
        internetPages.clickJavascriptAlertButton(2)
        browser.dismissAlert()
        assert.equal('You clicked: Cancel', internetPages.getResultText())
        
    })

    it('should send text to the alert', () => {
        internetPages.clickJavascriptAlertButton(3)
        browser.sendAlertText('This is some text')
        browser.acceptAlert()
        assert.equal('You entered: This is some text', internetPages.getResultText())
        browser.pause(3000)
    })
})