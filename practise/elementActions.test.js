const internetPage = require("../page-objects/internet.page")
const { assert } = require("chai")


internetPage = require ("../page-objects/internet.page")

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
        internetPage.enterUsername('Julia')
        assert.equals('Julia', internetPage.username.getValue())
     }

     it('should enter password'), () => {
        browser.url('${browser.options.baseUrl}/login')
        internetPage.enterPassword('Password')
        assert.equals('Password', internetPage.password.getValue())
     }


     it('should clear value'), () => {
         internetPage.username.click()
         internetPage.username.clearValue()

         assert.equals('', internetPage.username.getValue())

     }



})