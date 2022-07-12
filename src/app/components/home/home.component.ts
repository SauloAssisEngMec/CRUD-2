import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  productName: string = 'Angular course';
  advertisement: string = `the  ${this.productName} is sale!`;
  idProduct: number = 333;
  productPrice: number = 5.2;
  sale: boolean = false;
  photo: string = 'assets/angular.png';
  expirationDate: string = '2021-12-31';
  constructor() { 
    //this.advertisement = 'The' + this.productName + 'is sale!';

    console.log(' Product Name:', this.productName)
  }

  ngOnInit(): void {
  }

}
