internetPages = require ("../page-objects/internet.page")
// npm test -- --spec practise/dragAndDrop.test.js

describe("Drag and Drop", function () {
    it.skip('should drag column A to column B', () => {
        browser.url(`${browser.options.baseUrl}/drag_and_drop`)
        internetPages.dragColumnAToColumnB()
        browser.pause(3000)
        assert.equal("A", internetPages.columnBHeader.getText())
    })

    it('Should drag and drop', () => {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        internetPages.dragDraggableToDroppable()
        browser.pause(3000)
        assert.equal('Dropped!', internetPages.droppableParagraph.getText())
    })

})