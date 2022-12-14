import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      {
        path: "", component: DashboardComponent
      }, //anasayfa niteliginde gelmesini istedigim icin bu sekilde tanimladim
      //dashboard modulde yazdigimin cok da anlami kalmadi
      {
        path: "customers", loadChildren: () => import("./admin/components/customer/customer.module").then
          (module => module.CustomerModule)
      }, //modul bazli import islemi
      //lazyloading
      {
        path: "products", loadChildren: () => import("./admin/components/products/products.module").then
          (module => module.ProductsModule)
      },
      {
        path: "orders", loadChildren: () => import("./admin/components/order/order.module").then
          (module => module.OrderModule)
      }
    ]
  },
  //ana layouta karsilik gelen bir component yok
  {
    path: "", component: HomeComponent
  },
  {path:"basket", loadChildren:()=> import("./ui/components/baskets/baskets.module").then(module=>module.BasketsModule)},
  {path:"products", loadChildren:()=> import("./ui/components/products/products.module").then(module=>module.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
