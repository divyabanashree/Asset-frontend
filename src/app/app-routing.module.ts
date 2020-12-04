import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddassetComponent } from './addasset/addasset.component';
import { AdminComponent } from './admin/admin.component';
import { CurrentassetComponent } from './currentasset/currentasset.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EnterdataComponent } from './enterdata/enterdata.component';
import { GeneratereportComponent } from './generatereport/generatereport.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { UserassetsComponent } from './userassets/userassets.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:'userprofile/:id',component:UserprofileComponent},
{path:'editprofile/:id',component:EditprofileComponent},
{path:'currentasset',component:CurrentassetComponent,canActivate:[AuthGuard]},
{path:'generatereport',component:GeneratereportComponent},
{path:'home',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'addasset',component:AddassetComponent},
{path:'login',component:LoginComponent},
{path:'logout',component:LogoutComponent},
{path:'admin',component:AdminComponent},
{path:'userassets',component:UserassetsComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
