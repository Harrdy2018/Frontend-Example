import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '路由学习';
  constructor(private router: Router){

  }

  toProductDetails(){
    console.log("test luyou");
    this.router.navigate(['/product']);
  }
}
