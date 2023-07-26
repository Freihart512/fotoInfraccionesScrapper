import { v4 as uuidv4 } from 'uuid';
import { User, db } from "../interfaces";

export default class UserModel {
    private db: db

    constructor(db: db) {
        this.db = db;
    }

    async getUsers(): Promise<User[]> {
       return await this.db.getUsers();
    }

    async getUser(id:string): Promise<User> {
        return await this.db.getUser(id);
     }

    async createUser (user:User): Promise<User> {
        if(user.id){
            throw new Error("User Model: to create a new user must be an empty id");
        }

        user.id = uuidv4();
        user.isActive = true;
        return this.db.upsertUser(user);
    }
    
    private async changeUser (user:User): Promise<User> {
        if(!user.id){
            throw new Error("User Model: id is required to update/delete user");
        }
        return this.db.upsertUser(user);
    }

    async updateUser (user:User): Promise<User> {
        return this.changeUser(user);
    }

    async deleteUser (user:User): Promise<User> {
        user.isActive = false;
        return this.changeUser(user);
    }
}