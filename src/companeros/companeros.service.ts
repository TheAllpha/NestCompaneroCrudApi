import {Injectable, NotFoundException} from '@nestjs/common'
import {Companero} from './companero.model'


@Injectable()  
export class CompanerosService{
    private companeros: Companero[] = []

    insertCompanero(title: string, desc: string, age: number){
        const compId = Math.random().toString();
        const newCompanero = new Companero(compId, title, desc, age)
        this.companeros.push(newCompanero)
        return compId;
    }

    getCompaneros() {
        return [...this.companeros]
    }

    getSingleCompanero(companeroId: string) {
        const companero = this.findCompanero(companeroId)[0]
        return {...companero}
    }

    updateCompanero(companeroId: string, title: string, desc: string, age: number) {
        const [companero, index] = this.findCompanero(companeroId)
        const updatedCompanero = {...companero}
        if (title) {
            updatedCompanero.title = title
        }
        if (desc) {
            updatedCompanero.description = desc
        }
        if (age) {
            updatedCompanero.age = age
        }
        this.companeros[index] = updatedCompanero
    }

    deleteCompanero(companeroId: string) {
        const [companero, index] = this.findCompanero(companeroId)
        this.companeros.splice(index, 1)
    }

    private findCompanero(id: string): [Companero, number] {
        const companeroIndex = this.companeros.findIndex(comp => comp.id === id);
        const companero = this.companeros[companeroIndex]
        if(!companero) {
            throw new NotFoundException('Could not find the companero in the revolution.')
        }   
        return [companero, companeroIndex];
    }

}