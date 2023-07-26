import fetchDataFromUrl from "./ fetchDataFromUrl";

export default async function getDetailsFromPicInfraction(fullId: string): Promise<unknown> {
    const id = fullId.split('|')[1];
    const url = `https://gobiernoenlinea1.jalisco.gob.mx/serviciosVehiculares/visorInfraccion/SIGA/${id}`;
  
    try {
        const data = await fetchDataFromUrl(url, "informacion")
        if(typeof data === 'object' &&  data !== null  && 'folio' in data && typeof data.folio === 'string') {
            data.folio = fullId;
        }
        return data
      return 
    } catch (error) {
      console.error(`getDetailsFromPicInfraction: Error loading page ${url}: ${error}`);
      return null;
    }
  }