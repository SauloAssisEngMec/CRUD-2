import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.module';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  product: IProduto = {
    name: '',
    expiryDate: '',
    price: 0
  };

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(): void {
    this.produtosService.cadastrar(this.product).subscribe(retorno =>{
      this.product = retorno;
      this.produtosService.exibirMensagem(
        'System',
        `${this.product.name} foi cadastrado com sucesso. ID: ${this.product.id}`, 
        'toast-sucess'
      );
      this.router.navigate(['/produtos']);

    });
  }

}
