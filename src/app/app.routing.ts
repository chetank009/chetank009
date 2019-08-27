import { Routes,RouterModule, PreloadAllModules } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
// import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
// import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { UserGuardService } from './userguard.service';
import { AppCustomerPreloader } from './app.customerpreloader';

const arr : Routes=[
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  // {path:'addtask',component:AddtaskComponent},
  //  {path:'task',component:TaskdisplayComponent},
  // {path:'edittask/:Id',component:EdittaskComponent},
  {path:'task',canLoad:[UserGuardService],data:{preload:true},loadChildren:'./taskdisplay/task.module#TaskModule'},
  {path:'customer',data:{preload:true},loadChildren:'./customer/customer.module#CustomerModule'},
  {path:'user1',loadChildren:'./users/users.module#UsersModule'},
  {path:'product',canLoad:[UserGuardService],loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr,{preloadingStrategy:AppCustomerPreloader});
//PreloadAllModules
