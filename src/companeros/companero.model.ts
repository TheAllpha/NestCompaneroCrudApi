import * as mongoose from 'mongoose';
export const CompaneroSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description:{type: String, required: true},
    age: {type: Number, required: true}
})
    export interface Companero extends mongoose.Document{
    
         id: string;
         title:string;
         description:string;
         age:number;
        
}