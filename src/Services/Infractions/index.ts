import Browser from './Browser'
import formatedInfractions from './utils/formatedInfractions';
import {Car, Infraction} from '../../interfaces'

export default class InfractionsService {

    async getInfractionsFromwebSite (car: Car): Promise<Infraction[]> {
      const browser = new Browser('https://gobiernoenlinea1.jalisco.gob.mx/serviciosVehiculares/adeudos')
      await browser.initialize();
  
      if(!browser.page){
          throw new Error("ScrapperInfractions: unavailable page");
      }
  
      await browser.page.waitForSelector("#btnConsultar");
      await browser.page.type('#placa', car.plate);
      await browser.page.type('#numeroSerie', car.serialNumber);
      await browser.page.type('#nombrePropietario', car.owner);
      await browser.page.type('#numeroMotor', car.serialNumber);
      await browser.page.click("#btnConsultar");
      let errorMesage = '';

      try {
          errorMesage = await browser.page.$eval(".alert-danger", element=> element.innerHTML);
          await browser.close();
          throw new Error(`ScrapperInfractions: ${errorMesage}`);
      } catch (err) {
        await browser.page.waitForNavigation();
        const data = await browser.page.$eval("#adeudosList", element=> element.getAttribute("value"));
        await browser.close();
        if(!data) {
            throw new Error("ScrapperInfractions: no data available");
        }
        const infractions = await formatedInfractions(JSON.parse(data));
        return infractions;   
      }
    }
}
