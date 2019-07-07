import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Cliente } from '../../models/cliente';
import { Locadora } from '../../models/locadora';

@Component({
  selector: 'app-locacao-cadastro',
  templateUrl: './locacao-cadastro.component.html',
  styleUrls: ['./locacao-cadastro.component.css']
})
export class LocacaoCadastroComponent implements OnInit {

  locacaoForm: FormGroup;
  clientes: Cliente[];
  locadoras: Locadora[];
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.locacaoForm = this.formBuilder.group({
      data: [null, Validators.required],
      hora: [null, Validators.required],
      cliente: [null, Validators.required],
      locadora: [null, Validators.required]
    });
    this.getData();
  }

  async getData() {
    this.clientes = await this.api.getClientes().toPromise();
    this.locadoras = await this.api.getLocadoras().toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addLocacao(form)
      .subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/locacao-detalhes', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }



}
