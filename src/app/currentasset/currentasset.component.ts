import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-currentasset',
  templateUrl: './currentasset.component.html',
  styleUrls: ['./currentasset.component.css']
})
export class CurrentassetComponent implements OnInit {
  userId;
assets1;
 
  constructor(private service:AssetService,private activated:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let observables= this.service.getDataFromAPI();
    observables.subscribe(response=>
    {
      this.assets1=response['data'];
      console.log(this.assets1);
      
    })
}
rejected(id:Number){
alert('cannot add asset');
console.log(id);

this.service.removeAsset(id).subscribe(data=>{
  console.log(id);
  
});
this.ngOnInit();
}
accepted(category:String,quantity:Number,totalprice:Number)
{
  alert('asset added');
  this.service.addToGenerateReport(category,quantity,totalprice).subscribe(data=>{
    console.log(data);
    
  })
  // console.log(id);
  // console.log(quantity);
  // this.router.navigate([`generatereport/${id}`],
  // {
  //   queryParams:
  //   {
      
      
  //   title:title,
  //   category:category,
  //   quantity:quantity,
  //   totalprice:totalprice

  //   }
  // })
}
}

