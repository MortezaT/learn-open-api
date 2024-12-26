import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
}
