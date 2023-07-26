
export interface InfractionConcept {
    conceptId: number,
    description: string,
    legalReference: string,
    type: string,
    price: number
}

export interface InfractionDetails {
    fecha?: string,
    motivo?: string,
    imagenes?: Array<string>
    lugar?:string,
    urlImagenes?:string,
    limite?:string,
    velocidad?:string,
}

export interface Infraction {
    id:string,
    concepts: Array<InfractionConcept>,
    total: number,
    isPaid: boolean,
    details?: InfractionDetails,
    
}

export interface User {
    id?:string,
    email:string,
    isActive?: boolean;
}

export interface Car {
    plate: string
    engineNumer: string
    owner: string
    serialNumber: string,
    usersIds:Array<string>
    infractions: Array<Infraction>
}

export interface db {
    initialize(data:unknown): Promise< void >
    getUsers(): Promise< User[] >
    getUsersFromIds(ids:Array<string>): Promise< User[] >
    getUser(id:string): Promise< User >
    upsertUser(user:User): Promise<User>
    getCarsByUser(userId:string): Promise< Car[] >
    getCarByPlate(plate:string): Promise< Car >
    upsertCar(car:Car): Promise<Car>
    getInfractionsByCar(car: Car): Promise< Infraction[] >
    upsertInfraction(infraction:Infraction): Promise< Infraction >
    //getUserById(id:string):User,
    //getInfractions(page:string,limit:number):Promise<Array<User>>
}
