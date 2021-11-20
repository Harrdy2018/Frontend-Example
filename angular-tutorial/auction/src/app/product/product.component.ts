import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products:Array<Product>;
  public imgUrl='https://via.placeholder.com/320x150';
  constructor() { }

  ngOnInit(): void {
    this.products=[
      new Product(1,"第一个商品",1.99,3.5,"第一个商品描述",["电子产品","硬件设备"]),
      new Product(2,"第二个商品",1.99,2.5,"第二个商品描述",["电子产品","硬件设备"]),
      new Product(3,"第三个商品",1.99,3.5,"第三个商品描述",["硬件设备"]),
      new Product(4,"第四个商品",1.99,4.5,"第四个商品描述",["电子产品","硬件设备"]),
      new Product(5,"第五个商品",1.99,1.5,"第五个商品描述",["电子产品"]),
      new Product(6,"第六个商品",1.99,3.5,"第六个商品描述",["图书",]),
    ]
  }
}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
    ){}
}