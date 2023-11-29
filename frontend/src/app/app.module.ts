import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { User } from './user';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { FormControl} from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ComponentStudentComponent } from './component-student/component-student.component';
import { BorroBookComponent } from './borro-book/borro-book.component';
import { UserComponent } from './user/user.component';
// import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    DashbordComponent,
    AppComponent,
    ComponentStudentComponent,
    BorroBookComponent,
    UserComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
