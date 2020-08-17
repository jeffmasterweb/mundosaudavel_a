import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_ROUTE } from './app.routes';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


registerLocaleData(localePt);

declare var Hammer;

export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'auto',
      inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
      recognizers: [
        [
          Hammer.Swipe,
          { direction: Hammer.DIRECTION_HORIZONTAL }
        ]
      ]
    });
    return mc;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    APP_ROUTE,
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    { provide: 'googleTagManagerId', useValue: 'GTM-T7FLP2C' },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
