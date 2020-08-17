import { FormularioComponent } from './formulario/formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { BlogComponent } from './blog/blog.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './helper/product/product.component';
import { PostComponent } from './helper/post/post.component';
import { ClubeComponent } from './clube/clube.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { YoutubeComponent } from './helper/youtube.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    MenuComponent, HeaderComponent,
    FooterComponent, OfertasComponent,
    BlogComponent, CarouselComponent,
    ProductComponent, PostComponent,
    ClubeComponent, FiltroPipe,
    TruncatePipe,
    YoutubeComponent, GalleryComponent,
    FormularioComponent, FaqComponent
  ],
  exports: [
    MenuComponent, HeaderComponent,
    FooterComponent, OfertasComponent,
    BlogComponent, CarouselComponent,
    ProductComponent, PostComponent,
    ClubeComponent, FiltroPipe,
    TruncatePipe,
    YoutubeComponent, GalleryComponent,
    FormularioComponent, FaqComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    NgxGalleryModule,
    NgxPaginationModule,
    MDBBootstrapModule,
    ScrollToModule.forRoot()
  ]
})

export class ComponentsModule { }
