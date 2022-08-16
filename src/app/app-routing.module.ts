import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'banking',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'banking',
        exposedModule: './Module',
      }).then(m => m.BankingModule),
  },
  {
    path: 'loans',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'loans',
        exposedModule: './Module',
      }).then(m => m.LoansModule),
  },
  {
    path: 'notification-preferences',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'notification-preferences',
        exposedModule: './Module',
      }).then((m) => m.NotificationPreferencesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
