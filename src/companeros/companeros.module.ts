import {Module} from '@nestjs/common'
import { CompanerosController } from './companeros.controller'
import { CompanerosService } from './companeros.service'

@Module({
    controllers: [CompanerosController],
    providers: [CompanerosService],
})
export class CompanerosModule {}