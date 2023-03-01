import {
  Controller,
  Param,
  Body,
  UseGuards,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EstablishmentService } from '@application/entities/establishment/establishment.service';
import { Establishment } from '@application/entities/establishment/establishment.entity';
import { CreateEstablishmentBody } from '@infrahttp/dtos/create-establishment-body';
import { UpdateEstablishmentBody } from '@infrahttp/dtos/update-establishment-body';
import { JwtAuthGuard } from '@application/entities/auth/jwt-auth.guard';

interface FindAllEstablishmentsResponse {
  establishments: Establishment[];
}

@ApiTags('Establishments')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('establishments')
export class EstablishmentsController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Get()
  async findAllEstablishments(): Promise<FindAllEstablishmentsResponse> {
    const establishments =
      await this.establishmentService.findAllEstablishments();

    return { establishments };
  }

  @Get(':id')
  async findEstablishmentById(
    @Param('id') id: number,
  ): Promise<FindAllEstablishmentsResponse> {
    const establishments =
      await this.establishmentService.findEstablishmentById(id);

    return { establishments };
  }

  @Post()
  async createEstablishment(@Body() body: CreateEstablishmentBody) {
    const {
      address,
      cnpj,
      name,
      phone,
      quantityOfCarsVacancys,
      quantityOfMotorcycleVacancys,
    } = body;

    return this.establishmentService.createEstablishment({
      address,
      cnpj,
      name,
      phone,
      quantityOfCarsVacancys,
      quantityOfMotorcycleVacancys,
    });
  }

  @Put()
  async updateEstablisment(@Body() body: UpdateEstablishmentBody) {
    return this.establishmentService.updateEstablishment(body);
  }

  @Delete(':id')
  async deleteEstablishment(@Param('id') id: number) {
    return this.establishmentService.deleteEstablishment(id);
  }
}
