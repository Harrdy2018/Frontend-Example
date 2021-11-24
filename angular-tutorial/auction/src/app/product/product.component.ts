import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[];
  public keyword:string;
  public titleFilter:FormControl=new FormControl();
  public imgUrl='https://via.placeholder.com/320x150';
  constructor(private productService: ProductService) { 
    this.titleFilter.valueChanges.subscribe(
      (value:string)=>this.keyword=value
    );
  }

  ngOnInit(): void {
   this.products=this.productService.getProducts();
  }
}