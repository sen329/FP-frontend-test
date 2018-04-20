import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';



@Injectable()
export class AuthService {

  loginUrl = 'http://localhost:8000/api/login';
  registerUrl = 'http://localhost:8000/api/register'
  token = localStorage.token;
  httpOptions;

  constructor(private http: HttpClient, private router: Router) { }

  data: any = {};

  getHeader() {
    return {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('token')
    })};
  };

  login(body) {
      this.http.post(this.loginUrl, body, this.getHeader()).subscribe(
        res => {
          this.data = res;
          let username = JSON.parse(atob(this.data.data.token.split('.')[1])).username;
          localStorage.setItem('token', this.data.data.token);
          localStorage.setItem('username', this.data.username);
          localStorage.setItem('id', this.data.id);
          console.log(localStorage.getItem('username'));
          this.router.navigate(['/editAdmin']);
        });
  }

  register(body) {
  this.http.post(this.registerUrl, body, this.getHeader()).subscribe(
    res => {
      alert('Register success');
      this.router.navigate(['/login']);
  },
    err=>{
      let error = err.error;
      alert('error');
    }
  );
}

logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('username')
  this.router.navigate(['/dashboard']);
}

}
