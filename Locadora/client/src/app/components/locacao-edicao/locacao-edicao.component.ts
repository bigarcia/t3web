import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Cliente } from '../../models/cliente';
import { Locadora } from '../../models/locadora';
import { Locacao } from '../../models/locacao';


@Component({
  selector: 'app-locacao-edicao',
  templateUrl: './locacao-edicao.component.html',
  styleUrls: ['./locacao-edicao.component.css']
})
export class LocacaoEdicaoComponent implements OnInit {
  

  locacaoForm: FormGroup;
  id: string = '';
  selected: Locadora = null;
  locadoras: Locadora[];
  clientes: Cliente[];
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  

  async getData(id) {
    this.locadoras = await this.api.getLocadoras().toPromise();
    this.clientes = await this.api.getClientes().toPromise();
    let locacao: Locacao = await this.api.getLocacao(id).toPromise();
    this.id = locacao.id;
    this.locacaoForm.setValue({
      data: locacao.data,
      hora: locacao.hora,
      locadora: locacao.locadora,
      cliente: locacao.cliente
    });
    this.selected = locacao.locadora;
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  ngOnInit() {
    this.isLoadingResults = true;
    this.locacaoForm = this.formBuilder.group({
      data: [null, Validators.required],
      hora: [null, Validators.required],  
      cliente: [new Cliente(), Validators.required],
      locadora: [new Locadora(), Validators.required]
    });
    this.getData(this.route.snapshot.params['id']);
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateLocacao(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/locacao-detalhes', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  locacaoDetalhes() {
    this.router.navigate(['/locacao-detalhes', this.id]);
  }
  




}
