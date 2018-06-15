import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openSidenav:boolean = false;
  links = [
    {view: "/signup", viewLink: 'Signup', icon: 'face'},
    {view: "/login", viewLink: 'Login', icon: 'input'},
    {view: "/training", viewLink: 'Training', icon: 'fitness_center'},
    {view: "/logout", viewLink: 'Logout', icon: 'face'},
  ]
}
