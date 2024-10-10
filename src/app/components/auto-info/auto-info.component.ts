import { IAutoInfo } from './../../models/autoInfo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-info',
  templateUrl: './auto-info.component.html',
  styleUrls: ['./auto-info.component.scss']
})
export class AutoInfoComponent implements OnInit{
  @Input() autoInfo: IAutoInfo;


  ngOnInit() {}
}
