import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShowDetail1Component } from './show-detail1/show-detail1.component';
import { ShowDetail2Component } from './show-detail2/show-detail2.component';
import { ShowDetail3Component } from './show-detail3/show-detail3.component';
import { ShowDetail4Component } from './show-detail4/show-detail4.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginServiceService } from './login-service.service';
import { HttpModule } from '@angular/http';
import { SignupSuccessComponent } from './signup-success/signup-success.component';

const routes: Routes = [
  
  { path: 'Login', component : LoginComponent },
  { path: 'Signup', component : SignupComponent },
  { path: 'Products', component : ProductgridComponent},
  { path: 'show-detail1', component : ShowDetail1Component },
  { path: 'show-detail2', component : ShowDetail2Component },
  { path: 'show-detail3', component : ShowDetail3Component },
  { path: 'show-detail4', component : ShowDetail4Component },
  { path: 'Logout', component : LogoutComponent},
  { path: 'SignupSuccess', component : SignupSuccessComponent},
   /* { path: 'Details/:id', component: ProductdetailsComponent }, */
  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProductgridComponent,
    ProductdetailsComponent,
    ShowDetail1Component,
    ShowDetail2Component,
    ShowDetail3Component,
    ShowDetail4Component,
    LogoutComponent,
    SignupSuccessComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule


  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
