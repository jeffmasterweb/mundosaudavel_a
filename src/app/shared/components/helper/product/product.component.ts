
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() code: any = [];
  product: any = [];
  vigencia: any = [];
  public shops: any = [];
  imagem: any = [];
  link: string = '';
  valor: number;
  items: any = [];
  active: boolean = true;
  constructor(
    private sanitizer: DomSanitizer,
  ) { }
  ngOnInit() {
    this.active = true;
    setTimeout(() => {
      this.product = this.code.produtos;
      const depart = this.toSlug(this.product.dsc_departamento);
      const sector = this.toSlug(this.product.dsc_setor);
      this.link = `https://www.condor.com.br/produto/${ depart }/${ sector }/${ this.product.slug }`;
      this.active = false;
      this.imagem = `https://marketing.condor.com.br/api/Containers/produtos/download/${this.code.host}.jpg`;
    }, 1000);
  }
  private  toSlug(str: string) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    // remove accents, swap ñ for n, etc
    const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
    return str;
  }
}
