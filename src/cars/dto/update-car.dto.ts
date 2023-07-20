import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString({ message: 'El id debe ser un string' })
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: 'La marca debe ser un string' })
  @IsOptional()
  readonly marca?: string;

  @IsString({ message: 'El modelo debe ser un string' })
  @IsOptional()
  readonly modelo?: string;
}
