import { Args, Query, Resolver } from '@nestjs/graphql';
import { Person } from './entities/person.model';
import { Inject } from '@nestjs/common';
import { PeopleService } from './people.service';

@Resolver()
export class PeopleResolver {
  constructor(@Inject(PeopleService) private peopleService: PeopleService) {}

  @Query((returns) => Person)
  async person(@Args('name') name: string): Promise<Person> {
    return await this.peopleService.findByName(name);
  }

  @Query((returns) => [Person])
  async people(
    @Args('page', { nullable: true, description: 'All Star Wars People' })
    page: number,
  ): Promise<Person[]> {
    return await this.peopleService.findAll(page);
  }
}
