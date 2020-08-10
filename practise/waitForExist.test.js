internetPages = require ("../page-objects/internet.page")
// npm test -- --spec practise/waitForExist.test.js

describe('Wait For Exist', function () {
    it.only('should wait until the delete button exists', () => {
        browser.url(`${browser.options.baseUrl}/add_remove_elements/`)
        internetPages.clickExampleButton()
        internetPages.deleteButton(1).waitForExist()
        assert.equal(true, internetPages.deleteButton(1).isExisting())
        browser.pause(2000)
    })   

    it.skip('should wait for the delete button to not exist', () => {
        internetPages.clickDeleteButton(1)
        internetPages.deleteButton(1).waitForExist(500, true)
        assert.equal(false, internetPages.deleteButton(1).isExisting())
        browser.pause(2000)
    })
}) 
