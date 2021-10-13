import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Person {
  @Field()
  name: string;

  @Field()
  height: string;

  @Field(() => Int)
  mass: number;

  @Field()
  gender: string;

  @Field()
  homeworld: string;
}
