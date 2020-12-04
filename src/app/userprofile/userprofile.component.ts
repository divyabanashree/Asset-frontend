import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  users;
  id;
  
    constructor(private service:AssetService,private activated:ActivatedRoute,private router:Router) { 
      this.activated.params.subscribe(data=>{
        this.id=data;
        console.log(this.id);
      });
      this.activated.queryParams.subscribe(data=>{
        this.users=data;
        console.log(this.users);
      })
    }
    
  
    ngOnInit() {
      // let observables= this.service.getUserFromAPI();
      //   observables.subscribe(response=>
      //   {
      //     this.users=response['data'];
      //   })
  
    }
  
  update(){
  
  this.router.navigate([`editprofile/${this.id.id}`],{
    queryParams:{
      fname:this.users.fname,
      lname:this.users.lname,
      email:this.users.email,
      password:this.users.password
    }
  })
  }
  }
  




