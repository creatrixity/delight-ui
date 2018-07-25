import puppeteer from 'puppeteer';

const app = 'http://localhost:3000/stores';

let page:any = {};
let browser:any = {};

describe('Stores Page', () => {
  beforeAll(async () => {
    // launch browser	
    browser = await puppeteer.launch({
      headless: true, // headless mode set to false so browser opens up with visual feedback
    })
    
    // creates a new page in the opened browser	
    page = await browser.newPage()
  })
  
  test('Displays store title correctly', async (done) => {
    const storeTitleSelector = '[data-testid="stores-screen-title"]';

    await page.goto('http://localhost:3000/stores');
    await page.waitForSelector(storeTitleSelector);

    const storeTitle = await page.$eval(storeTitleSelector, (e:any) => e.innerHTML);
    expect(storeTitle).toBe('Quick &amp; Delightful.');
    done()
  }, 1600000);

  test('Displays a list of stores', async (done) => {
    const storesSelector = '[data-testid="stores-feed-item"]';

    await page.goto('http://localhost:3000/stores');
    await page.waitForSelector(storesSelector);
    
    done()
  }, 1600000);

  afterAll(async () => {
    await browser.close()
  })
});