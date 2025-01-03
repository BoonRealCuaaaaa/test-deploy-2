import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TiktokshopGenerateResponseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;
}
