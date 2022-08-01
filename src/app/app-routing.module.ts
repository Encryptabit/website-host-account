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
    path: 'notification-preferences',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:1338/remoteEntry.js',
        remoteName: 'notificationPreferences',
        exposedModule: './Module',
      }).then(m => m.NotificationPreferencesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
