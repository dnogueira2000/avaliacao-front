import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoas-read/pessoa.model';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.css']
})
export class PessoaUpdateComponent implements OnInit {

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

  update(): void {
    this.service.update(this.pessoa).subscribe((resposta) => {
      this.router.navigate(['pessoas']);
      this.service.mensagem("Pessoa atualizada com sucesso!");
    }, err => {
      this.service.mensagem("Verifique se os campos estão preenchidos corretamente!");
    })
  }

  cancelar(): void {
    this.router.navigate(['pessoas']);
  }
}
