import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DYNAMIC_COMPONENT, ClientHttp, CLIENT_HTTP } from '@orange/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBoostedModule } from 'ng-boosted';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { ModuleApiService } from './services/module-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgBoostedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: DYNAMIC_COMPONENT,
      useValue: AppComponent
    },
    {
      provide: CLIENT_HTTP,
      useClass: ClientHttp,
      deps: [
        HttpClient
      ]
    },
    ClientHttp,
    HttpClient,
    // ModuleApiService
  ],
  exports: [
    AppComponent,
    AppRoutingModule,
    NgbModule,
    NgBoostedModule
  ],
  entryComponents: [ AppComponent ]
} )
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule
    };
  }
}
