import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Cliente } from '../../models/cliente';
import { Locadora } from '../../models/locadora';
import { Locacao } from '../../models/locacao';


@Component({
  selector: 'app-locacao-detalhes',
  templateUrl: './locacao-detalhes.component.html',
  styleUrls: ['./locacao-detalhes.component.css']
})
export class LocacaoDetalhesComponent implements OnInit {

  locacao: Locacao = { id: '', data: '', hora: '', cliente: new Cliente(), locadora: new Locadora()  };
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  
  async getData(id) {
    this.locacao = await this.api.getLocacao(id).toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }
  ngOnInit() {
    this.getData(this.route.snapshot.params['id']);
  }

  deleteLocacao(id) {
    this.isLoadingResults = true;
    this.api.deleteLocacao(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/locacoes']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }



}
