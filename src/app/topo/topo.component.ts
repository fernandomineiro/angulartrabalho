import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})

export class TopoComponent implements OnInit {

  form = new FormGroup({
    dateYMD: new FormControl(new Date())
  });
  maxDate: Date;

  constructor() {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() - 0);
  }

  ngOnInit() {
  }

}