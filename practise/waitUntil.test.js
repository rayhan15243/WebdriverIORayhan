internetPages = require ("../page-objects/internet.page")
// npm test -- --spec practise/waitUntil.test.js


describe('WaitUntil', function () {
    it('should wait until the button text changes to Add', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        internetPages.clickPageButton()
        browser.waitUntil(() => {
            browser.pause(2000)
            return internetPages.pageButton.getText() === 'Add'
        }, 6000, 'Expect button text to change')
        assert.equal('Add', internetPages.pageButton.getText())
    })


    it('should wait until the button text changes to Remove', () => {
        internetPages.clickPageButton()
        browser.waitUntil(() => {
            return internetPages.pageButton.getText() === 'Remove'
        }, 6000, 'Expect button text to change')
        assert.equal('Remove', internetPages.pageButton.getText())
    })
}) 