import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { Code404Component } from './code404/code404.component';
import { LoginGuard } from './guard/login.guard';
import { ProductResolve } from './guard/product.resolve';
import { UnsavedGuard } from './guard/unsaved.guard';
import { HomeComponent } from './home/home.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductComponent } from './product/product.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';

const routes: Routes = [
  // 重定向路由
  {path:"", redirectTo: "home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"chat", component:ChatComponent, outlet:"aux"},
  {path:"product", component:ProductComponent},
  {path:"product/:id", component:ProductComponent,
    children:[
      {path:"", component:ProductDescComponent},
      {path:"seller/:id", component:SellerInfoComponent}
    ],
    canActivate:[LoginGuard],
    canDeactivate:[UnsavedGuard],
    resolve:{product:ProductResolve}},
  {path:"**", component:Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[LoginGuard, UnsavedGuard, ProductResolve]
})
export class AppRoutingModule { }
