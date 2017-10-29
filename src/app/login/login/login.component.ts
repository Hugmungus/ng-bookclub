import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HOME } from '../../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  login() {
    if (true) {
      this.router.navigate([HOME]);
    }
  }

}
