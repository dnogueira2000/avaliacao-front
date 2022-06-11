import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoas-read/pessoa.model';

@Component({
  selector: 'app-pessoa-delete',
  templateUrl: './pessoa-delete.component.html',
  styleUrls: ['./pessoa-delete.component.css']
})
export class PessoaDeleteComponent implements OnInit {

  pessoa: Pessoa = {
    codigo: '',
    nome: '',
    cpf: '',
    dataNascimento: ''
  }

  constructor(private service: PessoaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pessoa.codigo = this.route.snapshot.paramMap.get('codigo')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.pessoa.codigo!).subscribe((resposta) => {
      this.pessoa = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.pessoa.codigo!).subscribe((resposta) => {
      this.service.mensagem('Pessoa apagada com sucesso!');
      this.router.navigate(['pessoas']);
    })
  }
}
