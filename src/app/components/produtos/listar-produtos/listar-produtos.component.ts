import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.module';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {


  productList: IProduto[] = [];
  

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.productList = retorno;
    })
  } 

  deletar(produto: IProduto): void {
    this.produtosService.excluir(produto.id).subscribe(() => {
      this.produtosService.exibirMensagem(
        'System',
        `${produto.name} deleted`,
        'toast-error'
      );
      this.carregarProdutos();
    });

  }

}
