const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
    headless: true,
        args: [
            '--start-maximized',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--disable-gpu',
            '--window-size=1920x1080',
        ],
    });
    const page = await browser.newPage();
    await page.goto('https://github.com/caioagiani');
    await page.screenshot({path: 'assets/git.png'});
    await page.pdf({path: 'assets/git.pdf', format: 'A4'});
    // await page.click('a[target=_blank]');

    await browser.close();
})();