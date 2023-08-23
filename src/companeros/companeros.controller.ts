import {Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common'
import { CompanerosService } from './companeros.service'

@Controller('companeros')
export class CompanerosController {
    constructor(private readonly companerosService: CompanerosService) {}

    @Post()
    addCompanero(
     @Body('title') compTitle: string,
     @Body('description') compDesc: string,
     @Body('age') compAge: number,
     ) {
        const generatedId =  this.companerosService.insertCompanero(
            compTitle,
            compDesc,
            compAge
            );
        return {id: generatedId}
    }

    @Get()
    getAllCompaneros() {
        return this.companerosService.getCompaneros()
    }

    @Get(':id')
    getCompanero(@Param('id') compId: string,) {
        return this.companerosService.getSingleCompanero(compId)
    }

    @Patch(':id')
    updateCompanero(
        @Param('id') compId: string,
        @Body('title') compTitle: string, 
        @Body('description') compDesc: string, 
        @Body('age') compAge: number,
        ) { 
    this.companerosService.updateCompanero(compId, compTitle, compDesc, compAge)
    return null;
    }
    
    @Delete(':id')
    removeCompanero(@Param('id') compId: string, ) {
        this.companerosService.deleteCompanero(compId)
        return null;
    }
    
} 