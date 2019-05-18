import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  opened = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(url) {
    this.opened = false;
    this.router.navigate([url]);
  }

}
