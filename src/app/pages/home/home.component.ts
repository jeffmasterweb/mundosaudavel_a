import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Observable<any[]>;
  constructor(private ui: UiService) { }

  ngOnInit(): void {
    this.items = this.ui.read();
    this.items.subscribe((res) => console.log(res));
  }

}
