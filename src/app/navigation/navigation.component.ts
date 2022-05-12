import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DialoglogOutComponent } from '../dialoglog-out/dialoglog-out.component';
import { NotifdialogComponent } from '../notifdialog/notifdialog.component';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../_models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  private baseUrl = 'http://localhost:8080/us/finduser';

  currentUser!: User;
  // newUser!: User;
  hidden: any;
  constructor(
    public dialog: MatDialog,
    private auth: AuthentificationService,
    public http: HttpClient
  ) {
    this.currentUser = this.auth.currentUserValue;
  }

  openDialog() {
    this.dialog.open(DialoglogOutComponent, {
      width: '260px',
      height: '310px',
      position: {
        left: 'calc(50vw + 405px)',
        top: 'calc(50vw - 600px)',
      },
    });
  }

  openNotif() {
    this.dialog.open(NotifdialogComponent, {
      width: '205px',
      height: '230px',
      position: {
        left: 'calc(50vw + 475px)',
        top: 'calc(50vw - 600px)',
      },
    });
  }

  getUser(): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, this.currentUser.username);
  }

  // check(){
  //   this.getUser()
  // }

  ngOnInit(): void {
    this.getUser().subscribe(
      (data) => {
        this.hidden = true;
        console.log('cool');
      },
      (error) => {
        this.hidden = false;
        console.log('naz');
      }
    );
  }
}
