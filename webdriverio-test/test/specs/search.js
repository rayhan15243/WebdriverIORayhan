describe('Ebay Product Search', () => {
    it('It should open the main url and verify the title', () => {
        browser.url('https://www.ebay.com')
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');

      
    })
})

// npx wdio wdio.conf.js