import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-addasset',
  templateUrl: './addasset.component.html',
  styleUrls: ['./addasset.component.css']
})
export class AddassetComponent implements OnInit {
  addassetForm:FormGroup;
  constructor(private fb :FormBuilder,private service:AssetService) { }

  ngOnInit() {
    this.addassetForm=this.fb.group({
      title:this.fb.control('',[Validators.required]),
      category:this.fb.control('',[Validators.required]),
      quantity:this.fb.control('',[Validators.required]),
      price:this.fb.control('',[Validators.required]),
      additionaldetails:this.fb.control('',[Validators.required])
    });
  }

addAsset(title:String,category:String,quantity:Number,price:Number,additionaldetails:String){
    this.service.addAssetToService(title,category,quantity,price,additionaldetails).subscribe(data=>{
      console.log(data);
        alert('Asset Added Successfully');
    });
  }
}
