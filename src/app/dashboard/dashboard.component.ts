import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ApiService } from '../services/api.service';
import { User } from '../_models/user';
import { UtilisateurService } from '../services/utilisateur.service';
import { AuthentificationService } from '../services/authentification.service';
import { Chart } from 'chart.js';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TaskLog } from '../_models/taskLog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  chart: any = [];
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  currentUser!: User;
  users: any = [];
  projectSize: any;
  companySize: any;
  taskSize: any;
  now: number;
  CurrentTime: any;
  myTaskLog: any;
  HEROES: TaskLog[] = [{}];
  taskLogSize: number;
  //  ctx = document.getElementById('myChart').getContext('2d');

  //  canvas = <HTMLCanvasElement> document.getElementById('myChart');
  //  ctx = canvas.getContext('2d');

  // canvas = document.getElementById('myChart');
  // ctx = (this.canvas as HTMLCanvasElement).getContext('2d');

  constructor(
    private authenticationService: AuthentificationService,
    private userService: UtilisateurService,
    private api: ApiService,
    private route: Router // private loginComponent: LoginComponent
  ) {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
    setInterval(() => {
      this.CurrentTime =
        new Date().getHours() +
        ':' +
        new Date().getMinutes() +
        ':' +
        new Date().getSeconds();
    }, 1);

    this.currentUser = this.authenticationService.currentUserValue;
    // this.currentUser = this.loginComponent.getData();
  }

  ngOnInit(): void {
    console.log(this.currentUser);
    this.api.getTaskLog(this.currentUser.username).subscribe(
      (data) => {
        console.log(data);
        this.HEROES = data;
        console.log('task log reçue');
        console.log(this.HEROES[0].taskDescription);
        this.taskLogSize = this.HEROES.length;
        // console.log(this.myTaskLog.idTaskLog);
      },
      (error) => {
        console.log('task log non reçue');
      }
    );

    // this.chart = new Chart('canvas', {
    //   type: 'line',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [
    //       {
    //         label: 'My First dataset',
    //         backgroundColor: 'rgb(255, 99, 132)',
    //         borderColor: 'rgb(255, 99, 132)',
    //         data: [0, 10, 5, 2, 20, 30, 45],
    //         fill: false,
    //       },
    //       {
    //         label: 'My second dataset',
    //         backgroundColor: 'rgb(255, 99, 132)',
    //         borderColor: 'rgb(255, 99, 132)',
    //         data: [0, 10, 5, 2, 20, 30, 45].reverse(),
    //         fill: false,
    //       },
    //     ],
    //   },
    // });
    this.api.getProjectSize().subscribe((data) => {
      this.projectSize = data;
    });

    this.api.getcompanySize().subscribe((data) => {
      this.companySize = data;
    });

    this.api.gettaskSize().subscribe((data) => {
      this.taskSize = data;
    });
  }

  projectDetails() {
    this.route.navigate(['/project']);
  }
  taskDetails() {
    this.route.navigate(['/task']);
  }
  companyDetails() {
    this.route.navigate(['/company']);
  }
  // myChart = new Chart(this.ctx, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [
  //       {
  //         label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)',
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)',
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  // });
}
