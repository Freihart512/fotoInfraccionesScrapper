import { initializeApp, applicationDefault, cert } from 'firebase-admin/app'
import { getFirestore, Timestamp, FieldValue, Filter, DocumentReference, CollectionReference, WhereFilterOp, Query } from 'firebase-admin/firestore'
import { Car, User, db, infraction } from '../interfaces';

//const serviceAccount = require('./path/to/serviceAccountKey.json');

class FireStoreDb implements db {

    private db!: FirebaseFirestore.Firestore;

    async initialize(data: unknown) {
        initializeApp({
            credential: cert({})//cert(serviceAccount)
        });
        this.db = getFirestore();
    }

    private async getDataFromCollection(options:{ collectionName:string }, and:Array<{field:string, operator:WhereFilterOp, value:string|Array<string> }> = [] ):Promise<Array<any>>
    {
        const collectionRef = this.db.collection(options.collectionName);
        let query:Query|undefined;
        
        if(!collectionRef){
            throw new Error(`FireStore: impossible to get data from collection (${options.collectionName})`);
        }

        and.forEach(clause => {
            if (!query) {
                query = collectionRef.where(clause.field, clause.operator, clause.value)
            }
            else {
                query.where(clause.field, clause.operator, clause.value)
            }
        });

        const ref = query || collectionRef
        
        const snapShot = await (ref).get();
        const data: Array<any> = [];

        snapShot.forEach(doc => {
            data.push(doc.data());
        })
        return data;
    }

    private async setDataInCollection(data:any, collectionName:string): Promise<FirebaseFirestore.WriteResult>
    {
       
        const collectionRef = this.db.collection(collectionName);
        if(!data.id){
            throw new Error("FireBase DB: to complte the upsert action the ID is required")
        }
        const docRef = collectionRef.doc(data.id);
        return await docRef.set(docRef);
        
    }

    async getUsersFromIds(ids:Array<string>): Promise<User[]> {
        if(ids.length < 1){
            throw new Error("FireBase DB: to get users from ids you need to provide at least one id")
        }
        const and =  [{field: 'id', operator: 'in' as WhereFilterOp,  value: ids}]
        return await this.getDataFromCollection({collectionName: 'Users'}, and) as User[];
    }

    async getUsers(): Promise<User[]> {
        return await this.getDataFromCollection({collectionName: 'Users'}) as User[];
    }

    async getUser(id:string): Promise<User> {
        const and = [{field: 'id', operator: '==' as WhereFilterOp,  value: id}];
        const snapShot = await this.getDataFromCollection({collectionName: 'Users'}, and);
        return snapShot[0] as User;
    }

    async upsertUser(user: User): Promise<User> {
        await this.setDataInCollection(user, 'Users')
        return user;
    } 
    
    async getCarsByUser(userId:string): Promise<Car[]> {
        const and = [{field: 'userId', operator: '==' as WhereFilterOp,  value: userId}];
        return await this.getDataFromCollection({collectionName: 'Cars'}, and) as Car[]
    }

    async getCarByPlate(plate:string): Promise<Car> {
        const and = [{field: 'plate', operator: '==' as WhereFilterOp,  value: plate}];
        const car = await this.getDataFromCollection({collectionName: 'Cars'}, and);
        return car[0] as Car
        
    }

    async upsertCar(data: Car): Promise<Car> {
        await this.setDataInCollection(data, 'Cars')
        return data;
    } 

    async getInfractionsByCar(car:Car ): Promise<infraction[]> {
        const and = [{field: 'plate', operator: '==' as WhereFilterOp,  value: car.plate}]
        return await this.getDataFromCollection({collectionName: 'Infractions'}, and) as infraction[]
        
    }

    async upsertInfraction(infraction: infraction): Promise<infraction> {
        await this.setDataInCollection(infraction, 'Infractions')
        return infraction;
    }  
    
    
}

const firestoreDb = new FireStoreDb();
export default firestoreDb;
