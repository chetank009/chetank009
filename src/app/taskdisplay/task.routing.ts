import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { TaskdisplayComponent } from './taskdisplay.component';

const arr : Routes = [

  {path:'', children:[
  {path:'task',component:TaskdisplayComponent},
  {path:'addtask',component:AddtaskComponent},
  {path:'edittask/:Id',component:EdittaskComponent}
]},
];

export const taskrouting = RouterModule.forChild(arr);
