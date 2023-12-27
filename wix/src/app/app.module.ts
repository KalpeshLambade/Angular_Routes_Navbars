import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MensComponent } from './pages/products/mens/mens.component';
import { WomensComponent } from './pages/products/womens/womens.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    NotFoundComponent,
    SidebarComponent,
    MensComponent,
    WomensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
