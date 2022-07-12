import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.module';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {

  product: IProduto = {
    name: '',
    expiryDate: '',
    price: 0
  };

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.produtosService.buscarPorId(id).subscribe(retorno => {
      this.product = retorno;
    })
  }

  saveProduct(): void {
    this.produtosService.atualizar(this.product).subscribe(retorno =>{
      this.product = retorno;
      this.produtosService.exibirMensagem(
        'System',
        `${this.product.name} Update successfully. ID: ${this.product.id}`, 
        'toast-sucess'
      );
      this.router.navigate(['/produtos']);

    });
  }

}
