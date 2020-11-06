import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@modules/home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { NoPageFoundComponent } from '@modules/no-page-found/no-page-found.component';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  {
    path: '',
    component: MasterLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
    ]
  },
  { path: '**', component: NoPageFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
