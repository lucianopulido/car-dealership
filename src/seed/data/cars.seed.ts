import { ICar } from './../../cars/interfaces/cars.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: ICar[] = [
  {
    id: uuid(),
    marca: 'Toyota',
    modelo: 'Corolla',
  },
  {
    id: uuid(),
    marca: 'Honda',
    modelo: 'Civic',
  },
  {
    id: uuid(),
    marca: 'Jeep',
    modelo: 'Cherokee',
  },
];
