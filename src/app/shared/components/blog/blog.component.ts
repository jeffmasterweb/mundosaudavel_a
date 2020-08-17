import { Component, OnInit, Input } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() item: any = [];
  posts$: any = [];

  constructor(private api: UiService) {}

  ngOnInit() {
    this.getBlogger(this.item.tag, this.item.cant);
  }

  getBlogger(tag: number, qtd: number) {
    this.api.getBlog(tag, qtd).subscribe(res => this.posts$ = res);
  }
}
