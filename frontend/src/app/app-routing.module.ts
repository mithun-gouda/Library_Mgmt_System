import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { BorroBookComponent } from './borro-book/borro-book.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [  
{path:'',redirectTo:'register', pathMatch:'full'},
{path:'register',component:RegistrationComponent},
{path:'login',component:LoginComponent},
{path:'borrow',component:BorroBookComponent},
{path:'dashbord',component:DashbordComponent},
{path:'books',component:DashbordComponent},
{path:'users',component:UserComponent},

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

