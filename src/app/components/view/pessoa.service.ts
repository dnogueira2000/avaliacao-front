import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from './pessoas-read/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<any[]> {
    const url = `${this.baseUrl}/pessoa`;
    return this.http.get<Pessoa[]>(url);
  }

  create(pessoa: Pessoa):Observable<Pessoa> {
    const url = `${this.baseUrl}/pessoa`;

    return this.http.post<Pessoa>(url, pessoa);
  }

  findById(codigo: String): Observable<Pessoa> {
    const url = `${this.baseUrl}/pessoa/find/${codigo}`;

    return this.http.get<Pessoa>(url);
  }

  delete(codigo: String): Observable<void> {
    const url = `${this.baseUrl}/pessoa/${codigo}`;

    return this.http.delete<void>(url);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
