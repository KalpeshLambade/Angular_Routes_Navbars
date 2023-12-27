import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MensComponent } from './pages/products/mens/mens.component';
import { WomensComponent } from './pages/products/womens/womens.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent 
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "product",
    component : ProductsComponent,
    children : [
      {
        path : 'mens',
        component: MensComponent
      },
      {
        path : 'womens',
        component : WomensComponent
      }
    ]
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "**",
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
