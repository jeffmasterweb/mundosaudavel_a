import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/shared/services/ui.service';


@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styles: ['']
})
export class LojasComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private ui: UiService) { }

  ngOnInit(): void {
    this.items = this.ui.read();
    this.items.subscribe((res) => console.log(res));
  }
}
