import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanmode',
  templateUrl: './scanmode.component.html',
  styleUrls: ['./scanmode.component.css']
})
export class ScanmodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  modes: Mode[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}


interface Mode {
  value: string;
  viewValue: string;
}
