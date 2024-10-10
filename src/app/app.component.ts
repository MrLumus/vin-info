import { getCurrentDateAsString } from './utils/dateFormatter';
import { IAutoInfo } from './models/autoInfo';
import { Component, OnInit } from '@angular/core';
import { AutoInfoService } from './services/auto-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'vin-info';
  autoInfo$: IAutoInfo;

  constructor(private autoInfoService: AutoInfoService) {}

  ngOnInit(): void {
    this.autoInfoService.autoInfo$.subscribe((info) => {
      this.autoInfo$ = info;
    });
  }
}
