import { Module } from '@nestjs/common';
import { PeopleResolver } from './people.resolver';
import { PeopleService } from './people.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [PeopleResolver, PeopleService],
})
export class PeopleModule {}
