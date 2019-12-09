import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-atalho-perfil',
  templateUrl: './atalho-perfil.component.html',
  styleUrls: ['./atalho-perfil.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AtalhoPerfilComponent {}



