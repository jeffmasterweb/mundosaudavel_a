import { Component, OnInit, Input } from '@angular/core';
import { interval} from 'rxjs';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  @Input() item: any = [];

  constructor() { }

  ngOnInit(): void {
    interval(1500).subscribe(()=>console.log(this.item));
  }

}
