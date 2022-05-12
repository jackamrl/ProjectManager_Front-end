import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthentificationService } from '../services/authentification.service';
import { AnyObject } from 'chart.js/types/basic';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialoglog-out',
  templateUrl: './dialoglog-out.component.html',
  styleUrls: ['./dialoglog-out.component.scss'],
  providers: [LoginComponent],
})
export class DialoglogOutComponent implements OnInit {
  @ViewChild('ejDialog') ejDialog: DialoglogOutComponent;
  buttonTitle: string = 'Hide';
  toDisplay = true;
  visible: boolean = true;
  users: any;
  username: any;
  password: any;
  submitted = false;
  newUserElse: any;
  currentUser: User;
  // public newUserElse: Observable<User>;
  private baseUrl = 'http://localhost:8080/us/finduserSimple';

  constructor(
    private api: ApiService,
    private login: LoginComponent,
    private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthentificationService,
    private http: HttpClient
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  btnClick() {
    this.toDisplay = !this.toDisplay;
    this.router.navigate(['login']);
    this.submitted = true;
    // this.visible = this.visible ? false : true;
    // this.buttonTitle = this.visible ? 'Hide' : 'Show';
  }

  logout() {
    this.toDisplay = !this.toDisplay;
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    this.dialog.closeAll();
  }
  onSubmited() {
    this.submitted = true;
  }
  getUser(user?: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, this.currentUser.username);
  }
  ngOnInit(): void {
    // this.newUserElse = this.login.newuser;
    // this.api.getUser().subscribe((data) => (this.users = data));
    // this.username = this.login.ret();
    // console.log(this.newUserElse);
    this.getUser().subscribe(
      (data) => {
        console.log('cool recu');
        this.newUserElse = data;
        console.log(this.newUserElse);
      },
      (error) => {
        console.log('naz non recu');
      }
    );
  }
}
