import { Injectable } from '@nestjs/common';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';

@Injectable()
export class MeasurementsService {
  create(createMeasurementDto: CreateMeasurementDto) {
    return `This action adds a new measurement, with ${createMeasurementDto}`;
  }

  findAll() {
    return `This action returns all measurements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} measurement`;
  }

  update(id: number, updateMeasurementDto: UpdateMeasurementDto) {
    return `This action updates a #${id} measurement, with ${updateMeasurementDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} measurement`;
  }
}
