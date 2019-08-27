import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskdataService } from '../taskdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
   id:string ="";
  title: string = "";
  status: string = "";
  signup: FormGroup;
  displayTask: Task;
  constructor(
    private _act: ActivatedRoute,
    private _data: TaskdataService,
    private _route:Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.id = this._act.snapshot.params["Id"];
    this._data.getTaskById(this.id).subscribe((data:Task[]) => {
      this.displayTask = data[0];
      this.signup.patchValue({
        id: this.displayTask.Id,
        title: this.displayTask.Title,
        status: this.displayTask.Status,

      });
    });

    this.signup = this.fb.group({
      id: new FormControl(null, [
        Validators.required
      ]),
      title: new FormControl(null, Validators.required),

      status: new FormControl(null, Validators.required)
    });

    }



onEditTask() {
  this._data
    .editTask(
      new Task(
        this.signup.value.id,
        this.signup.value.title,

        this.signup.value.status

      )
    )
    .subscribe(
      (data:any)=>{
        alert("updated successfully");
        this._route.navigate(['/task']);
      }
    );
}

}
