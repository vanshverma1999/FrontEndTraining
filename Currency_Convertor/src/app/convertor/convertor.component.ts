import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {

  constructor() { }

  @Input() convertedResult:string|undefined;

  ngOnInit(): void {
  }

}
