import { Injectable, NotFoundException } from '@nestjs/common';
import { ICar } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: ICar[] = [
    /*   {
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
    */
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car With id ${id} not found`);
    }

    return car;
  }
  create(createCarDto: CreateCarDto) {
    const car: ICar = {
      id: uuid(),
      ...createCarDto, // esto es igual a hacer marca: createCarDto.marca , modelo: createCarDto.modelo
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getCarById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        return (carDB = { ...carDB, ...updateCarDto, id });
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.getCarById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }

  loadCarsWithSeedData(cars: ICar[]) {
    this.cars = cars;
  }
}
