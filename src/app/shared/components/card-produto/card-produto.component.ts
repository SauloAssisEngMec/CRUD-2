import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() photo!: string;
  @Input() productName!: string;
  @Input() sale!: boolean;
  @Input() idProduct!: number;
  @Input() expirationDate!: string ;
  @Input() productPrice!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
