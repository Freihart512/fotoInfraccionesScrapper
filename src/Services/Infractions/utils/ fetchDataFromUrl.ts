import Browser from "../Browser";

export default async function fetchDataFromUrl(url: string, inpuntId:string): Promise<unknown> {
    const browser = new Browser(url);
    await browser.initialize();
  
    try {
      const data = await browser.page?.$eval(`${inpuntId}`, (element: Element) => element.getAttribute("value"));
      if(data) {
        const obj = JSON.parse(data);
        return obj;
      }
    } finally {
      await browser.close();
    }
  }
