import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './component/demo.component';

const routes: Routes = [
  { path: 'terminal', component: DemoComponent },
  { path: 'orangeTv', component: DemoComponent },
  { path: 'channel', component: DemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
