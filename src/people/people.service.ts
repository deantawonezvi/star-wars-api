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

  async findByName(name: string) {
    const baseUrl = configService.getValue('BASE_URL');

    const response = await this.httpService
      .get(`${baseUrl}/people?search=${name}`)
      .toPromise();

    return response.data.results[0];
  }

  async findAll(page = 1) {
    const baseUrl = configService.getValue('BASE_URL');

    const response = await this.httpService
      .get(`${baseUrl}/people?page=${page}`)
      .toPromise();

    return response.data.results;
  }
}
