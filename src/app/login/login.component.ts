import { Component, OnInit } from '@angular/core';
// import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // logindetails: Login = {
  //   username: "",
  //   password: ""
  // };
  constructor() { }

  ngOnInit() {
    this.heroForm = new FormGroup({
        'name': new FormControl(this.hero.name, [
          Validators.required,
          Validators.minLength(4),
          forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
        ]),
        'alterEgo': new FormControl(this.hero.alterEgo),
        'power': new FormControl(this.hero.power, Validators.required)
      });

  }
  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }
}
