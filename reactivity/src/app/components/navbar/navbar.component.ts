import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public btnList = [
    {text: 'Home', route: '/'},
    {text: 'Bug Report', route: '/'},
    {text: 'About Project', route: '/about-us'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
