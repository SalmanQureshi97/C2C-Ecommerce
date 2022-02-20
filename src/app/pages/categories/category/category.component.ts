import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  filter = 'Sort By Trending';
  constructor(private renderer: Renderer2) {}
  @ViewChild('navbar') componentDiv: ElementRef;
  slides = [
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/ALMkRJhoTSZ03hfrP6HK',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/aXys4bStQJGef8PcNB2B',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/PAk09PZnRk6e5naRFoIr',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/aaox3e15SquEi2HAXXO5',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/NJcGeXnfQZeSDJNGFWLP',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/GsRHlFduTeNO7TjX1LNA',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/ALMkRJhoTSZ03hfrP6HK',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/aXys4bStQJGef8PcNB2B',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/PAk09PZnRk6e5naRFoIr',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/aaox3e15SquEi2HAXXO5',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/NJcGeXnfQZeSDJNGFWLP',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/GsRHlFduTeNO7TjX1LNA',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/ALMkRJhoTSZ03hfrP6HK',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/aXys4bStQJGef8PcNB2B',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/PAk09PZnRk6e5naRFoIr',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/aaox3e15SquEi2HAXXO5',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/NJcGeXnfQZeSDJNGFWLP',
    },
    {
      img: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/GsRHlFduTeNO7TjX1LNA',
    },
  ];
  i = 0;
  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.componentDiv.nativeElement;
    const viewportOffset = element.getBoundingClientRect();
    const top = viewportOffset.top;

    console.log(window.pageYOffset);
    if (top < 58) {
      // Do something
      this.renderer.setStyle(
        this.componentDiv.nativeElement,
        'border-top',
        '1px solid lightgray'
      );
      this.renderer.addClass(this.componentDiv.nativeElement, 'fixed-top');
      this.renderer.removeClass(this.componentDiv.nativeElement, 'sticky-top');
    }
    if (window.pageYOffset < 59) {
      this.renderer.setStyle(
        this.componentDiv.nativeElement,
        'border-top',
        '0px solid lightgray'
      );
      this.renderer.addClass(this.componentDiv.nativeElement, 'sticky-top');
      this.renderer.removeClass(this.componentDiv.nativeElement, 'fixed-top');
    }
    if (window.pageYOffset <= 134) {
      this.renderer.setStyle(
        this.componentDiv.nativeElement,
        'border-top',
        '0px solid lightgray'
      );
      this.renderer.addClass(this.componentDiv.nativeElement, 'sticky-top');
      this.renderer.removeClass(this.componentDiv.nativeElement, 'fixed-top');
    }
  }
}
