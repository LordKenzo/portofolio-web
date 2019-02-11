import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './page-not-found.component';
import { PathResolveService, paths } from './services/path-resolve.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: paths.home
  },
  {
    path: paths.home,
    component: HomeComponent
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
