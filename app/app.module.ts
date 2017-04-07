import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { MainMenu } from './main-menu.component';
import { SearchComponent } from './search.component';
import { LoginComponent }   from './login.component';
import { HomeComponent }    from './home.component';

import { LoginGuard }       from './guard/login.guard';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    MainMenu,
    SearchComponent,
    LoginComponent,
    HomeComponent,
  ],
  providers: [ LoginGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
