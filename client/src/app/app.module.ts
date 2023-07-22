import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavComponent } from './common/nav/nav.component';
import { JoinComponent } from './pages/join/join.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthService } from './user/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AM_TOKEN } from './services/map.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

declare let mapkit: any;

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    JoinComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    AuthService,
    {provide: AM_TOKEN, useValue: mapkit}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
