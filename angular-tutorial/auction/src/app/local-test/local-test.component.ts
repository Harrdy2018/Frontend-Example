import { Component, OnInit } from '@angular/core';
import { filter, from, map, Observable } from 'rxjs';

@Component({
  selector: 'app-local-test',
  templateUrl: './local-test.component.html',
  styleUrls: ['./local-test.component.css']
})
export class LocalTestComponent implements OnInit {
  public saved:boolean=false;
  constructor() { 
    console.log("i am in local-test constructor!");
    from([1,2,3,4]).pipe(
      filter(e=>e%2==0),
      map(e=>e*e)
    ).subscribe(
      e=>console.log(e),
      err=>console.error(err),
      ()=>console.log("end!!!")
    );
    
  }

  ngOnInit(): void {
  }
  toProductDetail(): void {
    console.log("test toProductDetail func");
  }

  onInputEvent(e: Event): void{
    console.log(e);
    console.log(e.target);
    console.log(this.saved);
  }
}
