import  puppeteer, { Browser, Page } from "puppeteer";

// const puppeteer  = require('puppeteer');

// const browser = await puppeteer.launch({
//     //headless: false,
//     ignoreHTTPSErrors: true
// });
// const page = await browser.newPage();

// await page.goto('https://gobiernoenlinea1.jalisco.gob.mx/serviciosVehiculares/adeudos');

// // Set screen size
// await page.setViewport({width: 1080, height: 1024});

// 
// await browser.close();

// console.log("aquii", data)

// console.log(await getPicsFromInfraction("113|390752799"))

export default class {

    page: Page|null = null;
    private url: string  = '';
    private browser: Browser|null = null;
 
    constructor(url: string) {
        this.url = url;
    }
    
    async initialize (puppeteerOptions = {ignoreHTTPSErrors: true}) {
        this.browser = await puppeteer.launch(puppeteerOptions);
        this.page = await this.browser.newPage();
        await this.page?.goto(this.url);
    }

    async close (){
        await this.browser?.close();
    }
}