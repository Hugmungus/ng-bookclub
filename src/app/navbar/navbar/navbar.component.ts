import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BOOK, GROUP, HOME, USER } from '../../constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public home: string = HOME;
  public user: string = USER;
  public group: string = GROUP;
  public book: string = BOOK;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  navigate(module: string) {
    console.log('NAVIGATE TO ' + module);
    this.router.navigate([module]);
  }
}
