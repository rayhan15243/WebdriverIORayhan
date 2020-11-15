const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('ITPROFILE1', 'Kingscollegelondon2020!');

        
        // expect(SecurePage.flashAlert).toBeExisting();
        // expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');

        const elem = $('#corebutton-1082-btnInnerEl')
        elem.waitUntil(function () {
            return this.getText() === 'ASK A QUESTION'
        }, {
            timeout: 5000,
            timeoutMsg: 'Cannot find button "ASK A QUESTION"'
        
          });


    });


  //  npx wdio wdio.conf.js
  // allure generate allure-results/ --clean && allure open
});


