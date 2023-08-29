import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'

import { CompanerosController } from './companeros.controller'
import { CompanerosService } from './companeros.service'
import { CompaneroSchema } from './companero.model'

@Module({
    imports: [MongooseModule.forFeature([{name: 'Companero', schema: CompaneroSchema}]), ],
    controllers: [CompanerosController],
    providers: [CompanerosService],
})
export class CompanerosModule {}