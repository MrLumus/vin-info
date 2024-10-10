import { AutoInfoService } from './../../services/auto-info.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormValidationService } from 'src/app/services/form-validation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  errors: string[] = [];
  isValid = true;

  car_number = new FormControl({ value: '', disabled: false });
  vin_number = new FormControl({ value: '', disabled: false });
  body_number = new FormControl({ value: '', disabled: false });
  chassie_number = new FormControl({ value: '', disabled: false });

  vininfo_form = new FormGroup({
    car_number: this.car_number,
    vin_number: this.vin_number,
    body_number: this.body_number,
    chassie_number: this.chassie_number,
  });

  constructor(
    private validateService: FormValidationService,
    private autoInfoService: AutoInfoService
  ) {}

  ngOnInit(): void {}

  onClear() {
    this.errors = [];
    this.isValid = true;

    this.car_number.enable();
    this.vin_number.enable();
    this.body_number.enable();
    this.chassie_number.enable();

    this.autoInfoService.clearAutoInfo();
  }

  onControlChange(fieldName: string) {
    switch (fieldName) {
      case 'car_number':
        if (this.vininfo_form.value.car_number) {
          this.vin_number.disable();
          this.body_number.disable();
          this.chassie_number.disable();
        } else {
          this.vin_number.enable();
          this.body_number.enable();
          this.chassie_number.enable();
        }
        break;

      case 'vin_number':
        if (this.vininfo_form.value.vin_number) {
          this.car_number.disable();
          this.body_number.disable();
          this.chassie_number.disable();
        } else {
          this.car_number.enable();
          this.body_number.enable();
          this.chassie_number.enable();
        }
        break;

      case 'body_number':
        if (this.vininfo_form.value.body_number) {
          this.vin_number.disable();
          this.car_number.disable();
          this.chassie_number.disable();
        } else {
          this.vin_number.enable();
          this.car_number.enable();
          this.chassie_number.enable();
        }
        break;

      case 'chassie_number':
        if (this.vininfo_form.value.chassie_number) {
          this.vin_number.disable();
          this.body_number.disable();
          this.car_number.disable();
        } else {
          this.vin_number.enable();
          this.body_number.enable();
          this.car_number.enable();
        }
        break;
    }
  }

  onSubmit() {
    this.isValid = true;
    this.errors = [];
    const form = this.vininfo_form.value;

    if (
      !form.car_number &&
      !form.vin_number &&
      !form.body_number &&
      !form.chassie_number
    ) {
      this.errors = ['Заполните хотя бы одно поле'];
      this.isValid = false;
    } else {
      if (form.car_number) {
        const car_validate = this.validateService.isValidCarNumber(
          form.car_number
        );
        if (!car_validate.isValid) {
          this.errors.push(car_validate.error);
          this.isValid = false;
        }
      }
      if (form.vin_number) {
        const vin_validate = this.validateService.isValidVin(form.vin_number);
        if (!vin_validate.isValid) {
          this.errors.push(vin_validate.error);
          this.isValid = false;
        }
      }
      if (form.body_number) {
        const body_validate = this.validateService.isValidBodyNumber(
          form.body_number
        );
        if (!body_validate.isValid) {
          this.errors.push(body_validate.error);
          this.isValid = false;
        }
      }
      if (form.chassie_number) {
        const chassie_validate = this.validateService.isValidChassieNumber(
          form.chassie_number
        );
        if (!chassie_validate.isValid) {
          this.errors.push(chassie_validate.error);
          this.isValid = false;
        }
      }

      if (this.isValid) {
        const form = this.vininfo_form.value;

        if (form.vin_number)
          this.autoInfoService.getAutoInfoByVIN(form.vin_number);
        else if (form.chassie_number)
          this.autoInfoService.getAuutoIngoByChassieNumber(form.chassie_number);
        else if (form.body_number)
          this.autoInfoService.getAutoInfoByBodyNumber(form.body_number);
      }
    }
  }
}
