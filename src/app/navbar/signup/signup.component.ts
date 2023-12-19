import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../Validateform';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  register: any;
  // type:string="password"
  // eyeIcon:string = "fa-eye-slash";
  // signUpForm!:FormGroup;  


  type:string="password"
  isText:boolean=false
  eyeIcon:string = "fa-eye-slash";
  signUpForm!:FormGroup;  
  constructor(private fb:FormBuilder,private auth:AuthService){
     
  }


  



  
  ngOnInit(){

      this.signUpForm = this.fb.group({
      firstName:['',Validators.required],
       lastName:['',Validators.required],
       userName:['',Validators.required],
          email:['',Validators.required],
       password:['',Validators.required]

  })

  }  


  hideShowPass(){
    this.isText=!this.isText
    this.isText? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash"
    this.isText? this.type="text":this.type="password"

    
  }

  onSignup(){

    console.log(this.signUpForm.value);


    if(this.signUpForm.valid){

      this.auth.signUp  (this.signUpForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.signUpForm.reset();

      },
      
      error:(err)=>{
        alert(err?.error.message)
      }
      })
    }


    else{
      ValidateForm.validateAllFormFeilds(this.signUpForm)
    }  

  }


















  

   }





  /*
  
  
  


  
  

  

      private validateAllFormFeilds(formgroup:FormGroup){
      
        Object.keys(formgroup.controls).forEach(field =>{
          const control=formgroup.get(field);
          if(control instanceof FormControl){
            control.markAsDirty({onlySelf:true});
          }

          else if(control instanceof FormGroup){
              this.validateAllFormFeilds(control);
          }
        })
    
  }




















  
  */  



  

 





