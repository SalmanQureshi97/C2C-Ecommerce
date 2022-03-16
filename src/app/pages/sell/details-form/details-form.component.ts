import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss'],
})
export class DetailsFormComponent implements OnInit {
  type = 'type';
  sizeLabel = 'Please Select Category First';
  sizeDisabled = true;
  condition = ['Brand New', 'Barely Worn', 'Used', 'Very Worn'];
  constructor() {}
  color = '#2889e9';
  ngOnInit(): void {}

  onCategorySelect() {
    this.sizeDisabled = false;
  }

  hex2name(color) {
    console.log(color);
    return color;
  }
}
