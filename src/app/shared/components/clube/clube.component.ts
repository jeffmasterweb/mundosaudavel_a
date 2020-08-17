import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-clube',
  templateUrl: './clube.component.html',
  styleUrls: ['./clube.component.scss']
})
export class ClubeComponent implements OnInit {

  json: any = [];
  constructor(private api: UiService) { }

  ngOnInit(): void {
    this.json = this.api.getStorage('sabores')[0].app;
  }

}
