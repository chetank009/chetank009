import { Component, OnInit } from '@angular/core';
//import { TaskdataService } from ".taskdata.service";
//import { Task } from './task';
import { TaskdataService } from '../taskdata.service';
import { Task } from '../task';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  task: FormGroup;
  constructor(private fb: FormBuilder,private _data: TaskdataService) {}

  ngOnInit() {
    this.task = this.fb.group({

          Id: new FormControl(null, Validators.required),
          Title: new FormControl(null, Validators.required),
          Status: new FormControl(null, Validators.required)
});
  }
  onSaveTask() {
    this._data
      .addTask(
        new Task(
          this.task.value.Id,
          this.task.value.Title,
          this.task.value.Status
        )
      )
      .subscribe((data: any) => {
        alert("record added");
      });
  }
}
