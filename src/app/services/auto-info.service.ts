import { getCurrentDateAsString } from './../utils/dateFormatter';
import { IAutoInfo } from './../models/autoInfo';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutoInfoService {
  private url = 'https://new-programmatic.com/insurance/api/getAutoInfo';
  private headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
  };

  public autoInfo$ = new Subject<any>();

  constructor() {}

  clearAutoInfo() {
    this.autoInfo$.next(null);
  }

  async getAuutoIngoByChassieNumber(chassie: string) {
    const body = {
      chassisNumber: chassie,
      date: getCurrentDateAsString(),
      key: 'PUBAPIKEY631681',
    };

    const response = await fetch(this.url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        ...body,
      }),
    });

    const json = await response.json();
    this.autoInfo$.next(json);

    return json;
  }

  async getAutoInfoByBodyNumber(bodyNumber: string) {
    const body = {
      chassisNumber: bodyNumber,
      date: getCurrentDateAsString(),
      key: 'PUBAPIKEY631681',
    };

    const response = await fetch(this.url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        ...body,
      }),
    });

    const json = await response.json();
    this.autoInfo$.next(json);

    return json;
  }

  async getAutoInfoByVIN(vin: string) {
    const body = {
      vin: vin,
      date: getCurrentDateAsString(),
      key: 'PUBAPIKEY631681',
    };

    const response = await fetch(this.url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        ...body,
      }),
    });

    const json = await response.json();
    this.autoInfo$.next(json);

    return json;
  }
}
