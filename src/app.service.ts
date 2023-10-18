import { Injectable } from '@nestjs/common';
import { AdminDto_Registration } from './dto/admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { plainToClass } from "class-transformer";
import { SerializedAdmin } from "./types/dataSerializer";

@Injectable()
export class AppService {
  constructor(@InjectRepository(Admin) private adminRepo: Repository<Admin>) {}
  async adminRegistration(dto: AdminDto_Registration) {
    const insertedData = this.adminRepo.create({
      username: dto.username,
      password: dto.password,
      role: dto.role
    });

    const savedObject = await this.adminRepo.save(insertedData);

    return plainToClass(SerializedAdmin, savedObject)
  }
}
