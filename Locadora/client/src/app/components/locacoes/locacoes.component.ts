import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Locacao } from '../../models/locacao';

@Component({
  selector: 'app-locacoes',
  templateUrl: './locacoes.component.html',
  styleUrls: ['./locacoes.component.css']
})
export class LocacoesComponent implements OnInit {

  displayedColumns: string[] = ['data', 'hora', 'cliente', 'locadora'];
  locacoes: Locacao[] = [];
  isLoadingResults = true;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.locacoes = await this.api.getLocacoes().toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }


}
