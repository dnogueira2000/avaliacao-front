import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoas-read/pessoa.model';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  pessoa: Pessoa = {
    cpf: '',
    nome: '',
    dataNascimento: ''
  }

  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.pessoa).subscribe((resposta) => {
      
    }, err => {
      if(err.status == 200 || err.status == 201) {
        this.service.mensagem("Pessoa criada com sucesso!");
        this.router.navigate(['pessoas']);
      } else {
        this.service.mensagem("Problemas ao cadastrar!");
        this.router.navigate(['pessoas']);
      }
    })
  }

  cancelar(): void {
    this.router.navigate(['pessoas']);
  }

}
