const puppeteer = require('puppeteer');
// start the puppeteer
// open a new browser 
// create a new page 
// open the specified page 
// wait for the specified time
//
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
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
    const page = await browser.newPage();
    page.authenticate({
        username: 'pxu10789-0',
        password: '0qrnkBQa=phu6kW294dU'
    });
    let i = await page.goto('https://www.youtube.com/watch?v=z5fsL-5Fc-I',{timeout : 0,waitUntil: 'domcontentloaded'});
    //await page.screenshot({path: 'trademutualfund.png'});
    await page.waitFor(60000 * (Math.ceil(Math.random() * 4) + 2));
    await browser.close();
    await browser.close();
  })();
/*for (let num = 0; num < 50; num++) {
    setTimeout(
        () => {
            
        },
          420000
    );
    console.log(num);
};*/