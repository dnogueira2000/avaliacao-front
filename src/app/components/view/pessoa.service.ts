import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from './pessoas-read/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<any[]> {
    const url = `${this.baseUrl}/pessoa`;
    return this.http.get<Pessoa[]>(url);
  }
}
