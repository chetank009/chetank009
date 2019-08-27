import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad } from '@angular/router';
import { TaskdataService } from './taskdisplay/taskdata.service';

@Injectable({
  providedIn: 'root'
})
export class TaskGuardService implements CanActivate,CanLoad {

  constructor(private _taskdata:TaskdataService,private _router:Router) { }
// canactivate
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

      return this.isTaskLoggedIn(state.url);
  }
  canLoad(_route:Route){
    return this.isTaskLoggedIn(_route.path);
  }
  isTaskLoggedIn(url:string):boolean{

    if(this._taskdata.isLoggedIn){
      return true;
    }
    this._taskdata.redirectURL=url;
    this._router.navigate(['/login']);
    return false;
  }
}
