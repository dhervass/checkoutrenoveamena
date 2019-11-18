import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CLIENT_HTTP, ClientHttp } from '@orange/core';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule( {
  imports: [RouterModule.forChild(routes), HttpClientModule],
  providers: [
    {
      provide: CLIENT_HTTP,
      useClass: ClientHttp,
      deps: [HttpClient]
    }
  ],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}
