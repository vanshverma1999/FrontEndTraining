import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency_Convertor';
  currencies = [
    {value:'USD',currencyValue:0.013},
    {value:'CAD',currencyValue:0.016},
    {value:'EUR',currencyValue:0.012},
    {value:'UEAD',currencyValue:0.046},
    {value:'WON',currencyValue:16.53}
  ];

  amount:number=NaN;
  type='';

  res:number=NaN;
  finalRes='';

  flag = false;

  convert(){
    console.log(this.amount+this.type);
    for(let currency of this.currencies){
        if(currency.value==this.type){
            this.res = currency.currencyValue*this.amount;
        }
    }
    this.finalRes = this.amount+'INR = '+this.res+this.type;
    this.flag = true;
  }
}

