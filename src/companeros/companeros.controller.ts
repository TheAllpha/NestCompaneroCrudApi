import {Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common'
import { CompanerosService } from './companeros.service'

@Controller('companeros')
export class CompanerosController {
    constructor(private readonly companerosService: CompanerosService) {}

      @Post()
      async addCompanero(
     @Body('title') compTitle: string,
     @Body('description') compDesc: string,
     @Body('age') compAge: number,
     ) {
        const generatedId =  await this.companerosService.insertCompanero(
            compTitle,
            compDesc,
            compAge,
            );
        return {id: generatedId}
    }

    @Get()
    async getAllCompaneros() {
       const companeros = await this.companerosService.getCompaneros()
       return companeros;
    }

    @Get(':id')
    getCompanero(@Param('id') compId: string,) {
        return this.companerosService.getSingleCompanero(compId)
    }

    @Patch(':id')
    async updateCompanero(
        @Param('id') compId: string,
        @Body('title') compTitle: string, 
        @Body('description') compDesc: string, 
        @Body('age') compAge: number,
        ) { 
    await this.companerosService.updateCompanero(compId, compTitle, compDesc, compAge)
    return null;
    }
    
    @Delete(':id')
    async removeCompanero(@Param('id') compId: string, ) {
       await this.companerosService.deleteCompanero(compId)
        return null;
    } 
    
} 