import { Module } from '@nestjs/common';
import { PeopleResolver } from './people.resolver';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [PeopleResolver, PeopleService],
  controllers: [PeopleController],
})
export class PeopleModule {}
