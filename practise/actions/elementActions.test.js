internetPage = require ("../../page-objects/internet.page")
loginData = require ("../../data/loginData.page")

// npm test -- --spec actions/elementActions.test.js
// ENV=qa npm actions

describe(' Test element actions', function() {
    
    it('should click element'), () => {
        browser.url('/')
        internetPage.clickOnLink()
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    }

    it('should get text'), () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    }

    it('should click checkbox'), () => {
       internetPage.clickLink(6)
       internetPage.clickCheckBox(1)
       expect(internetPage.checkbox(1).isSelected()).equals(true)
    }

    it('should uncheck checkbox'), () => {
        internetPage.clickCheckBox(1)
        expect(internetPage.checkbox(1).isSelected()).equals(false)
     }


     it('should enter username'), () => {
        browser.url('${browser.options.baseUrl}/login')
        internetPage.enterUsername(loginData.userName)
        assert.equals(loginData.userName), internetPage.username.getValue()
     }

     it('should enter password'), () => {
        browser.url('${browser.options.baseUrl}/login')
        internetPage.enterPassword(loginData.password)
        assert.equals(loginData.userName), internetPage.password.getValue()
     }


     it('should clear value'), () => {
         internetPage.username.click()
         internetPage.username.clearValue()
         assert.equals('', internetPage.username.getValue())

     }



})