import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-data-shower',
  templateUrl: './data-shower.component.html',
  styleUrls: ['./data-shower.component.css']
})
export class DataShowerComponent implements OnInit {

  constructor(private getData:GetDataService) { }

  data:any = [];

  ngOnInit(): void {
    this.getData.getData().subscribe(
      (res)=>{
        console.log(res); 
        this.data = res;
      }
    );
  }

}
