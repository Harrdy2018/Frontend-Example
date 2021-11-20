import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent implements OnInit {
  public productId:number;
  public productName:string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("商品详情 ",this.routeInfo.snapshot);
    console.log("请求查询中的参数", this.routeInfo.snapshot.queryParams["id"]);
    console.log("请求路径中的参数", this.routeInfo.snapshot.params["id"]);
    this.productId=this.routeInfo.snapshot.queryParams["id"] || this.routeInfo.snapshot.params["id"];
    // 参数订阅获取路由信息
    // this.routeInfo.params.subscribe((params: Params)=>this.productId=params["id"]);
    this.routeInfo.data.subscribe(
      (data:Data)=>{
        // 这里要再看看，需要修复
        console.log("get resolve data...");
        console.log("data  "+data, data as Product);
        console.log(typeof(data as Product));
      }
    );
  }
}

export class Product{
  constructor(public id:number, public name:string){}
}
