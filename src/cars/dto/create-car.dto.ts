import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'La marca debe ser un string' })
  readonly marca: string;

  @IsString({ message: 'El modelo debe ser un string' })
  readonly modelo: string;
}
