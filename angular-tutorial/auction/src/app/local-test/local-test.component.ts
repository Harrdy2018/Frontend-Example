import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-test',
  templateUrl: './local-test.component.html',
  styleUrls: ['./local-test.component.css']
})
export class LocalTestComponent implements OnInit {
  public saved:boolean=false;
  constructor() { }

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
