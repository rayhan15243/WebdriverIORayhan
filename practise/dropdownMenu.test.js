internetPages = require ("../page-objects/internet.page")
// npm test -- --spec practise/dropdownMenu.test.js



describe('Dropdown menu', function () {
    it('should select option 1', () => {
        browser.url(`${browser.options.baseUrl}/dropdown`)
        internetPages.clickDropdownMenu()
        internetPages.clickDropdownMenuOption1()
        assert.equal(true, internetPages.dropdownMenuOption1.isSelected())
    })

    it('should select option 2', () => {
        internetPages.clickDropdownMenu()
        internetPages.clickDropdownMenuOption2()
        assert.equal(true, internetPages.dropdownMenuOption2.isSelected())
    })
}) 