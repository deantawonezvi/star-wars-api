import { Injectable } from '@nestjs/common';
import { configService } from '../config/config.service';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PeopleService {
  constructor(private httpService: HttpService) {}
  async findOne(id: string) {
    const baseUrl = configService.getValue('BASE_URL');

    const response = await this.httpService
      .get(`${baseUrl}/people/${id}`)
      .toPromise();

    return response.data;
  }

  async findAll() {
    const baseUrl = configService.getValue('BASE_URL');

    const response = await this.httpService
      .get(`${baseUrl}/people`)
      .toPromise();
    return response.data.results;
  }
}
