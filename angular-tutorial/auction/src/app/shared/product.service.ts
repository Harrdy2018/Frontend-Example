import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products:Product[]=[
    new Product(1,"第一个商品",1.99,3.5,"第一个商品描述",["电子产品","硬件设备"]),
    new Product(2,"第二个商品",1.99,2.5,"第二个商品描述",["电子产品","硬件设备"]),
    new Product(3,"第三个商品",1.99,3.5,"第三个商品描述",["硬件设备"]),
    new Product(4,"第四个商品",1.99,4.5,"第四个商品描述",["电子产品","硬件设备"]),
    new Product(5,"第五个商品",1.99,1.5,"第五个商品描述",["电子产品"]),
    new Product(6,"第六个商品",1.99,3.5,"第六个商品描述",["图书",]),
  ];

  public comments:Comment[]=[
    new Comment(1,1,"2011-09-25 02:22:22","张三",3,"东西不错"),
    new Comment(2,1,"2011-09-09 02:22:22","zhangsan",4,"东西不错"),
    new Comment(3,1,"2011-09-05 02:22:22","zhangsan",3,"东西不错"),
    new Comment(4,2,"2011-09-23 02:22:22","zhangsan",5,"东西不错,快递也快"),
    new Comment(5,2,"2011-09-15 02:22:22","zhangsan",1,"东西不错"),
    new Comment(6,3,"2011-09-15 02:22:22","zhangsan",1,"东西不错"),
    new Comment(7,4,"2011-09-15 02:22:22","zhangsan",1,"东西不错"),
    new Comment(8,4,"2011-09-15 02:22:22","王五",3,"东西不错"),
    new Comment(9,5,"2011-10-15 18:22:22","zhangsan",1,"东西不错"),
    new Comment(10,6,"2011-09-15 02:22:22","狗六",4,"东西不错"),
  ];
  constructor() { }
  getProducts(){
    return this.products;
  }

  getProduct(id:number): Product{
    return this.products.find((product)=>product.id==id) as Product;
  }

  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment: Comment)=>comment.productId==id);
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

export class Comment {
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}