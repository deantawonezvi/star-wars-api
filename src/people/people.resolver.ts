import { Args, Query, Resolver } from '@nestjs/graphql';
import { Person } from './entities/person.model';
import { Inject } from '@nestjs/common';
import { PeopleService } from './people.service';

@Resolver()
export class PeopleResolver {
  constructor(@Inject(PeopleService) private peopleService: PeopleService) {}

  @Query((returns) => Person)
  async person(@Args('name') name: string): Promise<Person> {
    return await this.peopleService.findPerson(name);
  }

  @Query((returns) => [Person])
  async people(
    @Args('page', { nullable: true })
    page: number,
  ): Promise<Person[]> {
    return await this.peopleService.findAll(page);
  }

  @Query((returns) => [Person])
  async peopleByKeyWord(
    @Args('name')
    name: string,
  ): Promise<Person[]> {
    return await this.peopleService.findPeople(name);
  }
}
