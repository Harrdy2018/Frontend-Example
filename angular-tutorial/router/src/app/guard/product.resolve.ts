import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Product } from "../product/product.component";
import { Observable } from "rxjs";

@Injectable()
export class ProductResolve implements Resolve<Product>{
    constructor(private router:Router){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any{
        console.log("start resolve...");
        let productId:number=route.params["id"];
        if(productId==10){
            console.log("enter productId==10 ...");
            return new Product(11,"iPhone7");
        }else{
            this.router.navigate(['/home']);
            return undefined;
        }
    }
}