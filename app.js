const puppeteer = require('puppeteer');
// start the puppeteer
// open a new browser 
// create a new page 
// open the specified page 
// wait for the specified time
// open a new page after 7 mins

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
         args: [
             '--start-maximized',
             '--proxy-server=x.botproxy.net:8080',
             '--no-sandbox',
             '--disable-setuid-sandbox',
             '--disable-dev-shm-usage',
             '--disable-accelerated-2d-canvas',
             '--disable-gpu',
             '--window-size=1920x1080',
            ],
        });
        for (let num = 0; num < 10; num++) {
            // using promise 
            const testAsync = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                },60000 * 2);
            });
            await testAsync();
            const page = await browser.newPage();
            page.authenticate({
            username: 'pxu10789-0',
            password: '0qrnkBQa=phu6kW294dU'
            });
            await page.goto('https://www.youtube.com/watch?v=z5fsL-5Fc-I',{timeout : 0,waitUntil: 'domcontentloaded'});
            //await page.screenshot({path: 'trademutualfund.png'});
            await page.waitFor(60000 * (Math.ceil(Math.random() * 4) + 2));
            console.log(`page ${num}`);
        };
    await browser.close();
    await browser.close();
  })();