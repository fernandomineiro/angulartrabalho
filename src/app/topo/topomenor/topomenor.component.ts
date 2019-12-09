import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-topomenor',
  templateUrl: './topomenor.component.html',
  styleUrls: ['./topomenor.component.scss']
})
export class TopomenorComponent implements OnInit {

  constructor(private _location: Location) {}

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
  }

}
