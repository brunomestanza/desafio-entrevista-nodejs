import {
  Controller,
  Body,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { EntryService } from '@application/entities/entry/entry.service';
import { Entry } from '@applicationentities/entry/entry.entity';
import { CreateEntryBody } from '@infrahttp/dtos/create-entry-body';
import { ApiTags } from '@nestjs/swagger';

interface FindAllEntrysResponse {
  entrys: Entry[];
}

interface CountEntrysAndExitsResponse {
  entrys: number;
  exits: number;
}

@ApiTags('Entrys')
@Controller('entrys')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Get()
  async findAllEntrys(): Promise<FindAllEntrysResponse> {
    const entrys = await this.entryService.findAllEntrys();

    return { entrys };
  }

  @Get('summary')
  async countEntrysAndExits(): Promise<CountEntrysAndExitsResponse> {
    const { entrys, exits } = await this.entryService.countEntrysAndExits();

    return { entrys, exits };
  }

  @Get(':establishmentId')
  async findAllEntrysFromEstablishment(
    @Param('establishmentId') establishmentId: number,
  ): Promise<FindAllEntrysResponse> {
    console.log('Check point!');
    const entrys = await this.entryService.findAllEntrysFromEstablishment(
      establishmentId,
    );

    return { entrys };
  }

  @Post()
  async createEntry(@Body() body: CreateEntryBody) {
    const { establishmentId, vehicleId } = body;

    return this.entryService.createEntry({
      establishmentId,
      vehicleId,
    });
  }

  @Patch(':entryId')
  async confirmVehicleExit(@Param('entryId') entryId: number) {
    return this.entryService.confirmVehicleExit(entryId);
  }

  // @Delete(':id')
  // async deleteEstablishment(@Param('id') id: number) {
  //   return this.establishmentService.deleteEstablishment(id);
  // }
}
