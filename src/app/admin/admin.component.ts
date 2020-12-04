import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb :FormBuilder,private service:AssetService,private router : Router) { }
  ngOnInit() {
    this.loginForm=this.fb.group({
      email:this.fb.control('',[Validators.required]),
      password:this.fb.control('',[Validators.required])
    });
  }


login(email:String,password:String){
    this.service.userLogin(email,password).subscribe(data=>{
         console.log(data);
       if(data != null){
      localStorage.setItem('admin',"123456");
      alert('admin login successfully');
       }
       else{
 alert('check enter details properly');
       }
     
      
    })
  }


logout(){
  localStorage.removeItem("admin");
  this.router.navigateByUrl('signup');
}

}
