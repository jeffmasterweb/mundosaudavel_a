import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  items: any = [];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private ui: UiService) { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 4,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: false,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.ui.getData('gallery').subscribe(res => this.galleryImages = res);
    this.items = this.ui.readDB('gallery');
    this.items.subscribe(res => console.log(res));
  }
}
