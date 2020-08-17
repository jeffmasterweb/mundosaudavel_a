import { Component, OnInit, Input } from '@angular/core';
import { groupBy } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { FiltroPipe } from '../../pipes/filtro.pipe';
import { UiService } from './../../services/ui.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
  providers: [ FiltroPipe ]
})
export class OfertasComponent implements OnInit {

  @Input() item: any = [];

  public id: string = "hiper-condor-pinheirinho";
  search = "";
  nameLoja: any = [];
  lojas: any = [];
  shops: any = [];
  items: any = [];
  delivery: any = [];
  menu: any = [];
  p = 1;
  public lj: any = [];
  filtro: any = [];
  departFilter: string = "";
  active: boolean = false;

  constructor(
    private activate: ActivatedRoute,
    private api: UiService,
    private router: Router,
    private filterPipe: FiltroPipe
  ) {
    this.activate.url.subscribe((data) => {
      this.lj = data.length;
      this.api.getData("database").subscribe((res) => {
        this.delivery = res[0].ofertas.compre;
        if (data.length !== 0) {
          this.id = data[0].path;
          this.versao(this.id, this.item.campanha);
        } else {
          this.versao("hiper-condor-pinheirinho", this.item.campanha);
        }
      });
    });
    this.onRegiao(1);
  }

  versao(loja: string, campanha: any) {
    this.api
      .Collection(`Lojas?filter[where][slug]=${loja}`)
      .subscribe((res) => {
        this.nameLoja = res[0];
        this.Produtos(res[0]["cod_loja"], campanha);
        this.Menu(res[0]["cod_loja"], campanha);
      });
  }

  Menu(loja: number, campanha: number) {
    this.api
      .Collection(
        `Menus/MenuDepartamentoOfertasLojaCampanha?loja=${loja}&campanha=${campanha}`
      )
      .subscribe(
        (res) => {
          // const filter = res.filter((row) => row.dsc_kit !== null);
          // this.menu = filter;
          this.menu = res;
        },
        (err) => console.log(err)
      );
  }

  getDepartamento(loja: number, camp: number, depart?: number) {
    const query = `Ofertas/LojaProdutosCampanhaDepartamento?loja=${loja}&campanha=${camp}&departamento=${depart}`;
    console.log(query);
    this.api.Collection(query).subscribe(
      (res) => {
        // const filter = res.filter((row) => row.dsc_kit !== null);
        // this.shops = filter;
        this.shops = res;
      },
      (err) => console.log(err)
    );
  }

  Produtos(loja: number, campanha: number) {
    this.api
      .Collection(
        `Ofertas/LojaProdutosCampanha?loja=${loja}&campanha=${campanha}`
      )
      .subscribe(
        (res) => {
          // const filter = res.filter((row) => row.dsc_kit !== null);
          // this.shops = filter;
          this.shops = res;
        },
        (err) => console.log(err)
      );
  }

  ngOnInit() {
    this.active = false;
  }

  toogle() {
    this.active = !this.active;
  }

  onRegiao(event) {
    if (event === 1) {
      this.api.getLojaFindRegiao(event).subscribe((data) => {
        this.lojas = data;
      });
    } else {
      this.api.getLojaFindRegiao(event.target.value).subscribe((data) => {
        this.lojas = data;
      });
    }
  }
  onLojas(event) {
    console.log(event.target.value);
    this.router.navigate(["/loja", event.target.value]);
  }

  onLoja(id: string) {
    this.api.getLojaFindSlug(id).subscribe((data) => {
      this.nameLoja = data[0].nome;
    });
  }

  onSearch(event: any): any {
    this.departFilter = "";
    this.search = event.target.value;
  }

}
