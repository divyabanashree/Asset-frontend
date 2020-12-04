import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CurrentassetComponent } from './currentasset/currentasset.component';
import { EnterdataComponent } from './enterdata/enterdata.component';
import { GeneratereportComponent } from './generatereport/generatereport.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddassetComponent } from './addasset/addasset.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteassetComponent } from './deleteasset/deleteasset.component';
import { SearchassetComponent } from './searchasset/searchasset.component';
import { UpdateassetComponent } from './updateasset/updateasset.component';
import { UserassetsComponent } from './userassets/userassets.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserprofileComponent,
    EditprofileComponent,
    CurrentassetComponent,
    EnterdataComponent,
    GeneratereportComponent,
    NavigationComponent,
    HomeComponent,
    SignupComponent,
    AddassetComponent,
    LogoutComponent,
    LoginComponent,
    AdminComponent,
    DeleteassetComponent,
    SearchassetComponent,
    UpdateassetComponent,
    UserassetsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap:[UserprofileComponent]
})
export class AppModule { }
