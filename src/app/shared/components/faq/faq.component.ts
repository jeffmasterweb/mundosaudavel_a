import { Component, OnInit, Input } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  @Input() item: any = [];
  faq: any = [];
  constructor(private ui: UiService) { }

  ngOnInit(): void {
    this.faq = this.ui.getPage(this.item.slug);
  }
}
