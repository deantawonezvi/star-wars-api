import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Person {
  @Field()
  name: string;

  @Field(() => Int)
  height: number;

  @Field(() => Int)
  mass: number;

  @Field()
  gender: string;

  @Field()
  homeworld: string;
}
