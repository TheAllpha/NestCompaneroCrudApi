import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {Companero} from './companero.model';


@Injectable()  
export class CompanerosService{
    private companeros: Companero[] = []

    constructor(@InjectModel('Companero') private readonly companeroModel: Model<Companero>, ) {}

     async insertCompanero(title: string, desc: string, age: number){
        const newCompanero = new this.companeroModel({
            title,
            description: desc,
            age,
        })
        const result = await newCompanero.save();
        console.log(result);
        return result.id as string;
    }

    async getCompaneros() {
        const companeros = await this.companeroModel.find().exec();
        return companeros.map((comp) => ({
            id: comp.id, 
            title: comp.title, 
            description: comp.description, 
            age: comp.age
        }));
    }

    async getSingleCompanero(companeroId: string) {
        const companero =  await this.findCompanero(companeroId)
        return {
            id: companero.id, 
            title:companero.title, 
            description:companero.description, 
            age:companero.age,
            message: "companero has been found let's get revolution started.",
            data: companero,
        } 
    }

    async updateCompanero(
        companeroId: string, 
        title: string, 
        desc: string, 
        age: number
        ) {

        const updatedCompanero = await this.findCompanero(companeroId)

        if (title) {
            updatedCompanero.title = title
        }
        if (desc) {
            updatedCompanero.description = desc
        }
        if (age) {
            updatedCompanero.age = age
        }
        updatedCompanero.save();
    }

    async deleteCompanero(compId: string) {
      const result = await this.companeroModel.deleteOne({_id: compId}).exec()
      if (result.deletedCount === 0){
        throw new NotFoundException('companero not found')
      }
    }

    private async findCompanero(id: string): Promise<Companero> {
        let companero;
       try{
        companero = await this.companeroModel.findById(id).exec()
       } catch (error) {
        throw new NotFoundException('Could not find the companero in the revolution.')
       }
        if(!companero) {
            throw new NotFoundException('Could not find the companero in the revolution.')
        }  
        return companero;
    }

}