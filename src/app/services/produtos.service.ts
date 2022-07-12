import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { IProduto } from '../model/IProduto.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = environment.URL;
  
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  buscarTodos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro=> this.exibeErro(erro))
    );
  }

  buscarPorId(id: number): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro=> this.exibeErro(erro))
    );
  }

  atualizar(produto: IProduto): Observable<IProduto> {
    return this.http.put<IProduto>(`${this.URL}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro=> this.exibeErro(erro))
    );
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro=> this.exibeErro(erro))
    );
  }

  cadastrar(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro=> this.exibeErro(erro))
    );
  }

  exibeErro(e: any): Observable<any> {
    this.exibirMensagem('ERROR!!!','The operation has not been performed', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo);
  }
}
