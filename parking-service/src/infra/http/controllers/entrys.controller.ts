import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Entry } from '@applicationentities/entry/entry.entity';
import { EntryService } from '@application/entities/entry/entry.service';
import { CreateEntryBody } from '@infrahttp/dtos/create-entry-body';

interface FindEntrysResponse {
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
  async findAllEntrys(): Promise<FindEntrysResponse> {
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
  ): Promise<FindEntrysResponse> {
    const entrys = await this.entryService.findAllEntrysFromEstablishment(
      establishmentId,
    );

    return { entrys };
  }

  @Get(':vehicleId')
  async findAllEntrysFromVehicle(
    @Param('vehicleId') vehicleId: number,
  ): Promise<FindEntrysResponse> {
    const entrys = await this.entryService.findAllEntrysFromVehicle(vehicleId);

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

  @Delete(':id')
  async deleteEntry(@Param('id') id: number) {
    return this.entryService.deleteEntry(id);
  }
}
