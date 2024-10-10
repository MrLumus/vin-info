import { Injectable } from '@angular/core';

interface IValidate {
  isValid: boolean;
  error: string;
}

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  constructor() {}

  isValidCarNumber(number: string): IValidate {
    let regex = new RegExp('[А-Я]{1}[0-9]{3}[А-Я]{2}[0-9]{2}');
    let isValid = regex.test(number);

    if (isValid) {
      return {
        isValid: true,
        error: '',
      };
    } else {
      return {
        isValid: false,
        error: 'Вы указали неверный гос номер автомобиля',
      };
    }
  }

  isValidVin(vin: string): IValidate {
    let regex = /^[A-HJ-NPR-Z0-9]{17}$/i
    const isValid = regex.test(vin);

    if (isValid) {
      return {
        isValid: true,
        error: '',
      };
    } else {
      return {
        isValid: false,
        error: 'Вы указали неверный VIN номер автомобиля',
      };
    }
  }

  isValidBodyNumber(number: string): IValidate {
    let regex = new RegExp('^[A-Z0-9]{9,12}');
    const isValid = regex.test(number);

    if (isValid) {
      return {
        isValid: true,
        error: '',
      };
    } else {
      return {
        isValid: false,
        error: 'Вы указали неверный номер кузова',
      };
    }
  }

  isValidChassieNumber(number: string): IValidate {
    let regex = new RegExp('^[0-9]{6}');
    const isValid = regex.test(number);

    if (isValid) {
      return {
        isValid: true,
        error: '',
      };
    } else {
      return {
        isValid: false,
        error: 'Вы указали неверный номер рамы',
      };
    }
  }
}
