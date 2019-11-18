import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { API_CONFIG, OrangeCoreModule } from '@orange/core';
import { OrangeReduxModule } from '@orange/redux';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgLoggerModule } from '@nsalaun/ng-logger';

import { DemoComponent } from './component/demo.component';
import { DemoRoutingModule } from './demo-routing.module';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { AppModule } from '../../src/public_api';
import { FormsModule } from '@angular/forms';
import { environment } from '../../src/environments/environment';

registerLocaleData( es );

@NgModule( {
  declarations: [ DemoComponent ],
  imports: [
    AppModule,
    BrowserModule,
    FormsModule,
    DemoRoutingModule,
    OrangeCoreModule.forRoot(),
    OrangeReduxModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    NgLoggerModule.forRoot( environment.logLevel )
  ],
  providers: [
    {
      provide: API_CONFIG,
      useValue: environment.owcs
    },
    {
      provide: LOCALE_ID,
      useValue: environment.locale || 'es-ES'
    }
  ],
  bootstrap: [ DemoComponent ]
} )
export class DemoModule {
}
