import { NgModule } from '@angular/core';
import { AddtaskComponent } from './addtask/addtask.component';
import { TaskdisplayComponent } from './taskdisplay.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { taskrouting } from './task.routing';

@NgModule({
  declarations:[
    TaskdisplayComponent,
    AddtaskComponent,
    EdittaskComponent,
    Sidebar2Component
  ],
  imports:[CommonModule,FormsModule,ReactiveFormsModule,taskrouting]
})

export class TaskModule{}
