import { Infraction, InfractionDetails } from "../../../interfaces";
import getDetailsFromPicInfraction from "./getDetailsFromPicInfraction";
const PIC_INFRACTION_CONCEPT_ID = 44229;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function formatedInfractions(data: Array<any>): Promise<Array<Infraction>> { 
if (!data) {
    throw new Error('formatedInfractions: data doest not exist')
}

const carInfo = data[0];

if (!carInfo) {
    throw new Error('formatedInfractions: carInfo doest not exist')
}

if (!Array.isArray(carInfo.conceptos)) {
    throw new Error('formatedInfractions: carInfo does not have conceptos')
}


const infractions: { [key: string]: Infraction } = {};
const promises: Array<Promise<unknown>> = []
let currentFolio: string = '';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
carInfo.conceptos.forEach((infraction: any) => {
    if(!infraction){
       return;
    }
    if (infraction.folio) {
        const concept = {
            conceptId: infraction.concepto,
            description: infraction.descripcion,
            legalReference: infraction.baseLegal,
            type: infraction.tipo,
            price: infraction.importe
        }

        const i = {
            id: infraction.folio,
            concepts: [concept],
            total: infraction.importe,
            isPaid: false,
        }
        infractions[infraction.folio] = i;
        if (infraction.concepto === PIC_INFRACTION_CONCEPT_ID) {
            promises.push(getDetailsFromPicInfraction(infraction.folio));
        }
        currentFolio = infraction.folio;
    } else {
        infractions[currentFolio].concepts.push({
            conceptId: infraction.concepto,
            description: infraction.descripcion,
            legalReference: infraction.baseLegal,
            type: infraction.tipo,
            price: infraction.importe
        });
        infractions[currentFolio].total += infraction.importe;
    }

});

const details = await Promise.all(promises);
details.forEach(infractionDetails => {
    if (typeof infractionDetails === 'object' && infractionDetails !== null && 'folio' in infractionDetails && typeof infractionDetails.folio === 'string') {
        const { folio, ...details } = infractionDetails;
        if (infractions[folio])
            infractions[folio].details = details as InfractionDetails
    }

})

return Object.values(infractions);
    
}





