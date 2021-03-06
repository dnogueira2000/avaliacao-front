import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from './pessoa.model';

@Component({
  selector: 'app-pessoas-read',
  templateUrl: './pessoas-read.component.html',
  styleUrls: ['./pessoas-read.component.css']
})
export class PessoasReadComponent implements OnInit {

  pessoas: Pessoa[] = [];

  displayedColumns: string[] = ['codigo', 'nome', 'cpf', 'dataNascimento', 'acoes'];

  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.pessoas = resposta;
    })
  }

  navegarParaPessoaCreate() {
    this.router.navigate(["novo"])
  }
}
