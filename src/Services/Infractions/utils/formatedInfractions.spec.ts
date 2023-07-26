import { describe, it, vi, expect } from 'vitest'
import formatedInfractions from './formatedInfractions';
import * as getDetailsFromPicInfractionModule from './getDetailsFromPicInfraction';

formatedInfractions
const sampleData = [
    {
      "placa": "JMN4407",
      "idAdeudo": "ca77087c6d0c8866fb5b6127f59a5d26",
      "total": 10624.0,
      "conceptos": [
        {
          "idRow": 1,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 44229,
          "descripcion": "ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.",
          "cantidad": 1,
          "porcentaje": 100.0,
          "impBase": 962.0,
          "importe": 962.0,
          "folio": "113|390752799",
          "numReq": 0,
          "baseLegal": "ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "P",
          "emisor": "SIGA",
          "idGrupo": "JMN4407",
          "totalGrupo": 0.0
        },
        {
          "idRow": 2,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 18013,
          "descripcion": "RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.",
          "cantidad": 1,
          "porcentaje": 0.0,
          "impBase": 57.0,
          "importe": 57.0,
          "numReq": 0,
          "baseLegal": "ART. 32 FRACC. I LIE Y 71 C.F.EDO.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "R",
          "emisor": "SIGA",
          "idGrupo": "JMN4407",
          "totalGrupo": 1019.0
        },
        {
          "idRow": 3,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 44229,
          "descripcion": "ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.",
          "cantidad": 1,
          "porcentaje": 100.0,
          "impBase": 1037.0,
          "importe": 1037.0,
          "folio": "113|393985513",
          "numReq": 0,
          "baseLegal": "ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "P",
          "emisor": "SIGA",
          "idGrupo": "JMN44073",
          "totalGrupo": 0.0
        },
        {
          "idRow": 4,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 18013,
          "descripcion": "RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.",
          "cantidad": 1,
          "porcentaje": 0.0,
          "impBase": 30.0,
          "importe": 30.0,
          "numReq": 0,
          "baseLegal": "ART. 32 FRACC. I LIE Y 71 C.F.EDO.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "R",
          "emisor": "SIGA",
          "idGrupo": "JMN44073",
          "totalGrupo": 1067.0
        },
        {
          "idRow": 5,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 44229,
          "descripcion": "ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.",
          "cantidad": 1,
          "porcentaje": 100.0,
          "impBase": 1037.0,
          "importe": 1037.0,
          "folio": "113|392497009",
          "numReq": 0,
          "baseLegal": "ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "P",
          "emisor": "SIGA",
          "idGrupo": "JMN44075",
          "totalGrupo": 0.0
        },
        {
          "idRow": 6,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 18013,
          "descripcion": "RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.",
          "cantidad": 1,
          "porcentaje": 0.0,
          "impBase": 46.0,
          "importe": 46.0,
          "numReq": 0,
          "baseLegal": "ART. 32 FRACC. I LIE Y 71 C.F.EDO.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "R",
          "emisor": "SIGA",
          "idGrupo": "JMN44075",
          "totalGrupo": 1083.0
        },
        {
          "idRow": 7,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 44229,
          "descripcion": "ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.",
          "cantidad": 1,
          "porcentaje": 100.0,
          "impBase": 1037.0,
          "importe": 1037.0,
          "folio": "113|394213870",
          "numReq": 0,
          "baseLegal": "ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "P",
          "emisor": "SIGA",
          "idGrupo": "JMN44077",
          "totalGrupo": 0.0
        },
        {
          "idRow": 8,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 18013,
          "descripcion": "RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.",
          "cantidad": 1,
          "porcentaje": 0.0,
          "impBase": 30.0,
          "importe": 30.0,
          "numReq": 0,
          "baseLegal": "ART. 32 FRACC. I LIE Y 71 C.F.EDO.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "R",
          "emisor": "SIGA",
          "idGrupo": "JMN44077",
          "totalGrupo": 1067.0
        },
        {
          "idRow": 9,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 44229,
          "descripcion": "ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.",
          "cantidad": 1,
          "porcentaje": 100.0,
          "impBase": 1037.0,
          "importe": 1037.0,
          "folio": "113|392877399",
          "numReq": 0,
          "baseLegal": "ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "P",
          "emisor": "SIGA",
          "idGrupo": "JMN44079",
          "totalGrupo": 0.0
        },
        {
          "idRow": 10,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 18013,
          "descripcion": "RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.",
          "cantidad": 1,
          "porcentaje": 0.0,
          "impBase": 46.0,
          "importe": 46.0,
          "numReq": 0,
          "baseLegal": "ART. 32 FRACC. I LIE Y 71 C.F.EDO.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "R",
          "emisor": "SIGA",
          "idGrupo": "JMN44079",
          "totalGrupo": 1083.0
        },
        {
          "idRow": 11,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 44229,
          "descripcion": "ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.",
          "cantidad": 1,
          "porcentaje": 100.0,
          "impBase": 1037.0,
          "importe": 1037.0,
          "folio": "113|394547592",
          "numReq": 0,
          "baseLegal": "ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "P",
          "emisor": "SIGA",
          "idGrupo": "JMN440711",
          "totalGrupo": 0.0
        },
        {
          "idRow": 12,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 18013,
          "descripcion": "RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.",
          "cantidad": 1,
          "porcentaje": 0.0,
          "impBase": 30.0,
          "importe": 30.0,
          "numReq": 0,
          "baseLegal": "ART. 32 FRACC. I LIE Y 71 C.F.EDO.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "R",
          "emisor": "SIGA",
          "idGrupo": "JMN440711",
          "totalGrupo": 1067.0
        },
        {
          "idRow": 13,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 44229,
          "descripcion": "ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.",
          "cantidad": 1,
          "porcentaje": 100.0,
          "impBase": 1037.0,
          "importe": 1037.0,
          "folio": "113|393323958",
          "numReq": 0,
          "baseLegal": "ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "P",
          "emisor": "SIGA",
          "idGrupo": "JMN440713",
          "totalGrupo": 0.0
        },
        {
          "idRow": 14,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 18013,
          "descripcion": "RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.",
          "cantidad": 1,
          "porcentaje": 0.0,
          "impBase": 30.0,
          "importe": 30.0,
          "numReq": 0,
          "baseLegal": "ART. 32 FRACC. I LIE Y 71 C.F.EDO.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "R",
          "emisor": "SIGA",
          "idGrupo": "JMN440713",
          "totalGrupo": 1067.0
        },
        {
          "idRow": 15,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 44229,
          "descripcion": "ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.",
          "cantidad": 1,
          "porcentaje": 100.0,
          "impBase": 1037.0,
          "importe": 1037.0,
          "folio": "113|395674660",
          "numReq": 0,
          "baseLegal": "ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "P",
          "emisor": "SIGA",
          "idGrupo": "JMN440715",
          "totalGrupo": 0.0
        },
        {
          "idRow": 16,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 18013,
          "descripcion": "RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.",
          "cantidad": 1,
          "porcentaje": 0.0,
          "impBase": 15.0,
          "importe": 15.0,
          "numReq": 0,
          "baseLegal": "ART. 32 FRACC. I LIE Y 71 C.F.EDO.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "R",
          "emisor": "SIGA",
          "idGrupo": "JMN440715",
          "totalGrupo": 1052.0
        },
        {
          "idRow": 17,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 44229,
          "descripcion": "ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.",
          "cantidad": 1,
          "porcentaje": 100.0,
          "impBase": 1037.0,
          "importe": 1037.0,
          "folio": "113|393774295",
          "numReq": 0,
          "baseLegal": "ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "P",
          "emisor": "SIGA",
          "idGrupo": "JMN440717",
          "totalGrupo": 0.0
        },
        {
          "idRow": 18,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 18013,
          "descripcion": "RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.",
          "cantidad": 1,
          "porcentaje": 0.0,
          "impBase": 30.0,
          "importe": 30.0,
          "numReq": 0,
          "baseLegal": "ART. 32 FRACC. I LIE Y 71 C.F.EDO.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "R",
          "emisor": "SIGA",
          "idGrupo": "JMN440717",
          "totalGrupo": 1067.0
        },
        {
          "idRow": 19,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 44229,
          "descripcion": "ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.",
          "cantidad": 1,
          "porcentaje": 100.0,
          "impBase": 1037.0,
          "importe": 1037.0,
          "folio": "113|395767342",
          "numReq": 0,
          "baseLegal": "ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "P",
          "emisor": "SIGA",
          "idGrupo": "JMN440719",
          "totalGrupo": 0.0
        },
        {
          "idRow": 20,
          "numserie": "5619253               ",
          "grupo": "I ",
          "concepto": 18013,
          "descripcion": "RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.",
          "cantidad": 1,
          "porcentaje": 0.0,
          "impBase": 15.0,
          "importe": 15.0,
          "numReq": 0,
          "baseLegal": "ART. 32 FRACC. I LIE Y 71 C.F.EDO.",
          "periodo": 2023,
          "beneficiario": 71947,
          "tipo": "R",
          "emisor": "SIGA",
          "idGrupo": "JMN440719",
          "totalGrupo": 1052.0
        }
      ]
    }
  ];


describe('formatedInfractions', () => {
    it('should format infractions correctly', async () => {

        // Llama a la función que deseas probar
        const spy = vi.spyOn(getDetailsFromPicInfractionModule, 'default')
         .mockImplementationOnce(()=>Promise.resolve({"fecha":"2023-01-01T12:41:26","motivo":"EXCESO DE VELOCIDAD, LÍMITE 50","imagenes":["https://gobiernoenlinea1.jalisco.gob.mx/api/image/30333633383E343738393A3B3C42474741414246424A474F48494A4B4C4D4E535455","https://gobiernoenlinea1.jalisco.gob.mx/api/image/30333633383E343738393A3B3C42474742414246424A474F48494A4B4C4D4E535455","https://gobiernoenlinea1.jalisco.gob.mx/api/image/30333633383E343738393A3B3C42474743414246424A474F48494A4B4C4D4E535455"],"lugar":"Avenida Revolución , Calle Francisco Verdin Sur a Norte, Guadalajara","urlImagenes":"","folio":"113|390752799","limite":"","velocidad":""}))
         .mockImplementationOnce(()=>Promise.resolve(null))
         .mockImplementationOnce(()=>Promise.resolve(null))
         .mockImplementationOnce(()=>Promise.resolve(null))
         .mockImplementationOnce(()=>Promise.resolve(null))
         .mockImplementationOnce(()=>Promise.resolve(null))
         .mockImplementationOnce(()=>Promise.resolve(null))
         .mockImplementationOnce(()=>Promise.resolve(null))
         .mockImplementationOnce(()=>Promise.resolve(null))
         .mockImplementationOnce(()=>Promise.resolve(null))
        
        const result = await formatedInfractions(sampleData);

        expect(result).toEqual([{"id":"113|390752799","concepts":[{"conceptId":44229,"description":"ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.","legalReference":"ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.","type":"P","price":962},{"conceptId":18013,"description":"RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.","legalReference":"ART. 32 FRACC. I LIE Y 71 C.F.EDO.","type":"R","price":57}],"total":1019,"isPaid":false,"details":{"fecha":"2023-01-01T12:41:26","motivo":"EXCESO DE VELOCIDAD, LÍMITE 50","imagenes":["https://gobiernoenlinea1.jalisco.gob.mx/api/image/30333633383E343738393A3B3C42474741414246424A474F48494A4B4C4D4E535455","https://gobiernoenlinea1.jalisco.gob.mx/api/image/30333633383E343738393A3B3C42474742414246424A474F48494A4B4C4D4E535455","https://gobiernoenlinea1.jalisco.gob.mx/api/image/30333633383E343738393A3B3C42474743414246424A474F48494A4B4C4D4E535455"],"lugar":"Avenida Revolución , Calle Francisco Verdin Sur a Norte, Guadalajara","urlImagenes":"","limite":"","velocidad":""}},{"id":"113|393985513","concepts":[{"conceptId":44229,"description":"ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.","legalReference":"ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.","type":"P","price":1037},{"conceptId":18013,"description":"RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.","legalReference":"ART. 32 FRACC. I LIE Y 71 C.F.EDO.","type":"R","price":30}],"total":1067,"isPaid":false},{"id":"113|392497009","concepts":[{"conceptId":44229,"description":"ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.","legalReference":"ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.","type":"P","price":1037},{"conceptId":18013,"description":"RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.","legalReference":"ART. 32 FRACC. I LIE Y 71 C.F.EDO.","type":"R","price":46}],"total":1083,"isPaid":false},{"id":"113|394213870","concepts":[{"conceptId":44229,"description":"ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.","legalReference":"ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.","type":"P","price":1037},{"conceptId":18013,"description":"RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.","legalReference":"ART. 32 FRACC. I LIE Y 71 C.F.EDO.","type":"R","price":30}],"total":1067,"isPaid":false},{"id":"113|392877399","concepts":[{"conceptId":44229,"description":"ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.","legalReference":"ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.","type":"P","price":1037},{"conceptId":18013,"description":"RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.","legalReference":"ART. 32 FRACC. I LIE Y 71 C.F.EDO.","type":"R","price":46}],"total":1083,"isPaid":false},{"id":"113|394547592","concepts":[{"conceptId":44229,"description":"ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.","legalReference":"ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.","type":"P","price":1037},{"conceptId":18013,"description":"RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.","legalReference":"ART. 32 FRACC. I LIE Y 71 C.F.EDO.","type":"R","price":30}],"total":1067,"isPaid":false},{"id":"113|393323958","concepts":[{"conceptId":44229,"description":"ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.","legalReference":"ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.","type":"P","price":1037},{"conceptId":18013,"description":"RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.","legalReference":"ART. 32 FRACC. I LIE Y 71 C.F.EDO.","type":"R","price":30}],"total":1067,"isPaid":false},{"id":"113|395674660","concepts":[{"conceptId":44229,"description":"ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.","legalReference":"ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.","type":"P","price":1037},{"conceptId":18013,"description":"RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.","legalReference":"ART. 32 FRACC. I LIE Y 71 C.F.EDO.","type":"R","price":15}],"total":1052,"isPaid":false},{"id":"113|393774295","concepts":[{"conceptId":44229,"description":"ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.","legalReference":"ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.","type":"P","price":1037},{"conceptId":18013,"description":"RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.","legalReference":"ART. 32 FRACC. I LIE Y 71 C.F.EDO.","type":"R","price":30}],"total":1067,"isPaid":false},{"id":"113|395767342","concepts":[{"conceptId":44229,"description":"ART. 183. FRACC. III. FOTO-INFRACCIÓN POR MEDIO DE EQUIP. O SIST. ELECT. AL CONDUCTOR QUE EXCEDA DIEZ KM. POR HORA  EL LIM. DE VEL. MÁX. PERM. CUANDO EXISTAN SEÑALAM. QUE ANUNCIE EL CITADO LIM. DE VEL.EN Z. PROX. A CENTROS ESCOL. Y HOSP.","legalReference":"ART. 183 FRACC. III. LEY DE MOV. Y TRANSP. DEL EDO. DE JAL.","type":"P","price":1037},{"conceptId":18013,"description":"RECARGOS INFRACCIONES LEY DE MOVILIDAD Y TRANSP. DEL EDO. DE JAL.","legalReference":"ART. 32 FRACC. I LIE Y 71 C.F.EDO.","type":"R","price":15}],"total":1052,"isPaid":false}])

        spy.mockClear();

    });

    it('should throw an error if carInfo is missing', async () => {
      const sampleData:Array<unknown> = [];
  
      await expect(formatedInfractions(sampleData)).rejects.toThrow('formatedInfractions: carInfo doest not exist');
    });
  
    it('should throw an error if conceptos is not an array', async () => {
      const sampleData = [
        {
          conceptos: {},
        },
      ];
  
      await expect(formatedInfractions(sampleData)).rejects.toThrow('formatedInfractions: carInfo does not have conceptos');
    });
});