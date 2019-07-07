import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Locadora } from '../../models/locadora';
import { Locacao } from '../../models/locacao';

@Component({
  selector: 'app-locadora-detalhes',
  templateUrl: './locadora-detalhes.component.html',
  styleUrls: ['./locadora-detalhes.component.css']
})
export class LocadoraDetalhesComponent implements OnInit {
  locadora: Locadora = { id: '', cnpj: '', nome: '', cidade: null};
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  async getData(id) {
    this.locadora = await this.api.getLocadora(id).toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }
  ngOnInit() {
    this.getData(this.route.snapshot.params['id']);
  }

  deleteLocadora(id) {
    this.isLoadingResults = true;
    this.api.deleteLocadora(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/locadoras']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }


}
