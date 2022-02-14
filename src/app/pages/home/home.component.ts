import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imagesTrend = {
    title: 'Shop Latest Trends',
    images: [
      {
        imgTitle: 'Vintage Jeans',
        src: 'https://images.ctfassets.net/bdvz0u6oqffk/2G6nFMlnfuYJmeGi0t8grq/e0bf341439a0598d386ef8b5deade17e/3_bottoms.jpg?fm=webp&h=300&w=300',
      },
      {
        imgTitle: 'Designer Boots',
        src: 'https://images.ctfassets.net/bdvz0u6oqffk/52ss9PaWP6tRgyuvc06azK/be291bd08478564aee9a715dbf43508f/2-footwear.jpg?fm=webp&h=245&w=390',
      },
      {
        imgTitle: 'Oversized',
        src: 'https://images.ctfassets.net/bdvz0u6oqffk/36BfXSc2LJWlgirBMRnruQ/feb480871a917312859fa23177b0a461/3-streetwear.jpg?fm=webp&h=245&w=390',
      },
    ],
  };

  imagesStyle = {
    title: 'Shop By Style',
    images: [
      {
        imgTitle: 'Street Wear',
        src: 'https://images.ctfassets.net/bdvz0u6oqffk/hHu9wROVc4oPwjH5oBBzh/49023c5409f1c667eca2c93553865601/ShopByStyle_Streetwear2.jpg?fm=webp&h=245&w=390',
      },
      {
        imgTitle: 'Luxury',
        src: 'https://images.ctfassets.net/bdvz0u6oqffk/3oRUvnntTxFd1pYQy4DA5E/4a8c47c29af2911bde70e45aae6735c6/ShopByStyle-LuxuryLVPuffer.jpg?fm=webp&h=245&w=390',
      },
      {
        imgTitle: 'Vintage',
        src: 'https://images.ctfassets.net/bdvz0u6oqffk/7ICpfHe5ShaBXBruw5JydC/64c54eca4b895d9aba3ca6aad1465d1e/ShopByStyle_Web-Vintage4.jpg?fm=webp&h=245&w=390',
      },
      {
        imgTitle: 'Techwear',
        src: 'https://images.ctfassets.net/bdvz0u6oqffk/vWBsGV7ZIMFsxKgJq6VL4/7767e0a2dcd4dff3fd77e46297121e3c/ShopByStyle_Web-Tech3.jpg?fm=webp&h=245&w=390',
      },
      {
        imgTitle: 'Minimal',
        src: 'https://images.ctfassets.net/bdvz0u6oqffk/1itLXxA6Ajm41pG1sU7HuN/7f295c2f005a71791794b4f19a18d384/ShopByStyle_Web-Minimal-2.jpg?fm=webp&h=245&w=390',
      },
    ],
  };

  imagesBrand = {
    title: 'Shop By Brands',
    images: [
      {
        imgTitle: 'Nike',
        src: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/output=quality:70/compress/https://d1qz9pzgo5wm5k.cloudfront.net/api/file/U25ZkV6TeqoUPCQfqPok',
      },
      {
        imgTitle: 'Fendi',
        src: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/output=quality:70/compress/https://process.fs.grailed.com/NsZExX2URnKpAwdrgZS7',
      },
      {
        imgTitle: 'LV',
        src: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/output=quality:70/compress/https://process.fs.grailed.com/tpzvcjS0OP7MrQJiIyLQ',
      },
      {
        imgTitle: 'Prada',
        src: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/output=quality:70/compress/https://d1qz9pzgo5wm5k.cloudfront.net/api/file/UL6cz2PcTbeRXKsTZf2w',
      },
      {
        imgTitle: 'Burberry',
        src: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/output=quality:70/compress/https://process.fs.grailed.com/BKuKlN5DTQSdwLlh9fF2',
      },
    ],
  };

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
  ];

  constructor(public breakpointObserver: BreakpointObserver) {}
  miniNavInvisibile = false;
  ngOnInit(): void {}
}
