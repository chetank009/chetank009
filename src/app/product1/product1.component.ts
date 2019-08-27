import { Component, OnInit } from '@angular/core';
import { Product } from '../productdisplay/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  arr:Product[]=[];
productData:any;
errormessage:string;
//fetching  the data from service
  constructor(private _actroute:ActivatedRoute) {
    this.productData=this._actroute.snapshot.data["pdata"];
    console.log(this.productData);
   }
//to print data and error msg from service on display page
  ngOnInit() {
    this.arr=this.productData.products;
    console.log(this.arr);
    this.errormessage=this.productData.errormsg;

  }

}
