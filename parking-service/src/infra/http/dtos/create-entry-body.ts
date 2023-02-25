import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEntryBody {
  @IsNotEmpty({ message: "EstablishmentId can't be null" })
  @IsNumber({}, { message: 'EstablishmentId has to be a number' })
  establishmentId: number;

  @IsNotEmpty({ message: "VehicleId can't be null" })
  @IsNumber({}, { message: 'VehicleId has to be a number' })
  vehicleId: number;
}
