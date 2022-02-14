import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {
  @Input() images: any; // decorate the property with @Input()
  constructor() {}

  ngOnInit(): void {
    console.log(this.images);
  }
}
