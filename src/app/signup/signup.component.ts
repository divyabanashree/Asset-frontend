import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private service:AssetService,private fb :FormBuilder) { }

 
  ngOnInit() {
    this.signupForm=this.fb.group({
      firstname:this.fb.control('',[Validators.required]),
      lastname:this.fb.control('',[Validators.required]),
      email:this.fb.control('',[Validators.required]),
      password:this.fb.control('',[Validators.required])
    });
  }

  signin(firstname:String,lastname:String,email:String,password:String){
    this.service.addUserToService(firstname,lastname,email,password).subscribe(data=>{
      console.log(data);
        alert('signin successfully');
    });
  }

}

