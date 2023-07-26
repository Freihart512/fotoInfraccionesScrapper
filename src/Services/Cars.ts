import { v4 as uuidv4 } from 'uuid';
import { User, db, Car, Infraction } from "../interfaces";
import UserModel from './Users';
import ScrapperInfractions from './Infractions/ScrapperModule';

const isPropertyEmpty = (propertyName:string, car:Car) => {
    let key = propertyName as keyof typeof car;
    if(!car[key]){
        throw new Error(`Car service: ${key} can not be empty`);
    }
    return true;
}

const validateSerialNumber = (car:Car) => {
    isPropertyEmpty('serialNumber', car);

    if(car.serialNumber.length != 5){
        throw new Error("Car service: serialNumber needs to be the last five characters");
    }
}


export default class CarModel {
    private db: db

    constructor(db: db) {
        this.db = db;
    }

    async getCarsByUser(userId: string): Promise<Car[]> {
        if (!userId) {
            return [];
        }

        return await this.db.getCarsByUser(userId);
    }
    private validatationsToCrateCar(car:Car) {
        const VALIDATIONS = {            
            serialNumber: validateSerialNumber,
        }

        Object.keys(car).forEach(key => {
            const k = key as keyof typeof VALIDATIONS 
             if(VALIDATIONS[k]) {
                VALIDATIONS[k](car);
             } else{
                isPropertyEmpty(k,car);
             }
        })

    }

    private async updateInfractions(carInfracctions: Array<{ [key: string]: Infraction }>, newIfractions: Array<{ [key: string]: Infraction }>) {


    }

    async RegisterCar(data: Car): Promise<Car> {
        this.validatationsToCrateCar(data)
        const users = await this.db.getUsersFromIds(data.usersIds);
        
        if (users.length === data.usersIds.length) {
            throw new Error(`Car Service: some users dont exists please confrim that all ids are valid (usersIds: ${data.usersIds})`);
        }

        const car = await this.db.getCarByPlate(data.plate);
        let infractions = [];
        if (car) {
            car.usersIds = [...new Set([...car.usersIds, data.usersIds])] as Array<string>
        }

        infractions = await ScrapperInfractions(data);
        return
    }


}