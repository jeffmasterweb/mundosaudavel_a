import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  items: any = [];

  constructor(private ui: UiService) { }

  ngOnInit(): void {
    this.ui.getData('carousel').subscribe(res => this.items = res);
  }

}
