import { Component} from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-confg-menu',
  templateUrl: './confg-menu.component.html',
  styleUrls: ['./confg-menu.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class ConfgMenuComponent {}

