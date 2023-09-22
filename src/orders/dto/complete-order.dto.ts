import { IsInt, IsNumber, IsString } from 'class-validator';

export class CompleteOrderDto {
  @IsString()
  action: string;

  @IsNumber()
  @IsInt()
  arg: number;
}
