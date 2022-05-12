import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutComponent } from './ajout/ajout.component';
import { CompanyComponent } from './company/company.component';
import { AuthGuard } from './helpers/auth.gard';
import { LoginComponent } from './login/login.component';
import { MychartComponent } from './mychart/mychart.component';
import { ProjectComponent } from './projectn/project.component';
import { TaskComponent } from './task/task.component';
import { TasklogComponent } from './tasklog/tasklog.component';

const routes: Routes = [
  { path: 'home', component: AccueilComponent, canActivate: [AuthGuard] },
  // { path: 'home', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'task', component: TaskComponent },
  { path: 'taskLog', component: TasklogComponent },
  { path: 'chart', component: MychartComponent },
  { path: 'add', component: AjoutComponent },
  { path: '**', redirectTo: 'home' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
