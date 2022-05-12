import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialoglogOutComponent } from './dialoglog-out/dialoglog-out.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NotifdialogComponent } from './notifdialog/notifdialog.component';
import { ViewGraphComponent } from './view-graph/view-graph.component';
import { CompanyComponent } from './company/company.component';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './projectn/project.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MychartComponent } from './mychart/mychart.component';
import { FormsModule } from '@angular/forms';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { AjoutComponent } from './ajout/ajout.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CompanyaddComponent } from './companyadd/companyadd.component';
import { MatInputModule } from '@angular/material/input';
import { ProjectaddComponent } from './projectadd/projectadd.component';
import { TaskaddComponent } from './taskadd/taskadd.component';
import { MatSelectModule } from '@angular/material/select';
import { TasklogComponent } from './tasklog/tasklog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertMessageComponent } from './alert-message/alert-message.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent,
    DialoglogOutComponent,
    NotifdialogComponent,
    ViewGraphComponent,
    CompanyComponent,
    TaskComponent,
    ProjectComponent,
    MychartComponent,
    SidenavbarComponent,
    AjoutComponent,
    CompanyaddComponent,
    ProjectaddComponent,
    TaskaddComponent,
    TasklogComponent,
    AlertMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,
    MatRadioModule,
    FormsModule,
    FontAwesomeModule,
    HighchartsChartModule,
    ChartModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,

    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
