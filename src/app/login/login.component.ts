import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit, ContentChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../_models/user';
import { DialoglogOutComponent } from '../dialoglog-out/dialoglog-out.component';
import { MatIcon } from '@angular/material/icon';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // directive: [DialoglogOutComponent]
})
@Injectable()
export class LoginComponent implements OnInit {
  showPasswords = false;
  @ContentChild(MatIcon) matIcon: MatIcon;
  // @ViewChild(MatIcon)
  // matIcon: MatIcon;
  target = document.getElementById('target');
  array: string[] = ['développeur', 'photographe', 'créatif'];
  wordIndex = 0;
  letterIndex = 0;
  returnUrl!: string;
  loading = false;
  submitted = false;
  public showPassword: boolean = false;
  showSpinner: any;

  // users: any;
  // us: any;
  // use: any;

  user = new User();
  newuser: Object;

  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private api: ApiService,
    private route: ActivatedRoute,
    private authenticationService: AuthentificationService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/login']);
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

    // let response = this.http.get('http://localhost:8080/users');

    // console.log(this.use);

    // response.subscribe((data) => (this.users = data));

    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      first_name: [''],
      last_name: [''],
      email: [''],
      adminRole: [''],
    });
  }

  login() {
    console.log(this.user);

    this.submitted = true;
    this.alertService.clear();

    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService
      .loginUser(this.user)
      .pipe(first())
      .subscribe(
        (data) => {
          // alert('Authentification réussie ');
          setTimeout(() => {
            this.router.navigate([this.returnUrl]);
          }, 3000);
          this.newuser = data;
          console.log(this.newuser);
          // console.log(this.newuser);
        },
        (error) => {
          // alert('Saisisez bien vos identifiants');
          this.alertService.error(error);
          this.alertService.success('Registration successful', true);
          this.loading = false;
        }
      );
  }
  get f() {
    return this.loginForm.controls;
  }

  getData() {
    return this.newuser;
  }
  // toggleShow() {
  //   this.showPassword = !this.showPassword;
  //   this.matIcon.type = this.showPassword ? 'text' : 'password';
  // }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  loaddata() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
  }
  // login() {
  //   this.api.getUser().subscribe((res) => {
  //     const users = res.find((user: any) => {
  //       return (
  //         user.username === this.loginForm.value.username &&
  //         user.password === this.loginForm.value.password
  //       );
  //     });
  //     this.use = this.loginForm.value.username;

  //     if (users) {
  //       alert('sucess');
  //       this.loginForm.reset;
  //       this.router.navigate(['home']);
  //     } else {
  //       alert('bad');
  //     }
  //   });
  // }

  // login() {
  //   this.submitted = true;

  //   // reset alerts on submit

  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   this.loading = true;
  //   this.authenticationService
  //     .login(this.f['username'].value, this.f['password'].value)
  //     .pipe(first())
  //     .subscribe(
  //       (data) => {
  //         this.router.navigate([this.returnUrl]);
  //         console.log('cool');
  //       },
  //       (error) => {
  //         console.error('error');
  //         this.loading = false;
  //       }
  //     );
  // }

  // createLetter = () => {
  //   const letter = document.createElement('span');
  //   // this.target.appendChild(letter);

  //   letter.textContent = this.array[this.wordIndex][this.letterIndex];

  //   setTimeout(() => {
  //     letter.remove();
  //   }, 2800);
  // };
}
