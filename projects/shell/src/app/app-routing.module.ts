import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('dashboard/Module').then((m) => m.AppModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('admin/Module').then((m) => m.AppModule),
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
