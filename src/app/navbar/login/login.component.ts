import { Component } from '@angular/core';
import { FormBuilder,  FormControl,  FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../Validateform';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  type:string="password"
  isText:boolean=false
  eyeIcon:string = "fa-eye-slash";
  loginForm!:FormGroup;  
  isRegister:boolean=false;
  constructor(private fb:FormBuilder, private auth:AuthService){
     
  }

  ngOnInit(){

       this.loginForm = this.fb.group({
           username:['',Validators.required],
           password:['',Validators.required]

       })
      }

  hideShowPass(){
    this.isText=!this.isText
    this.isText? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash"
    this.isText? this.type="text":this.type="password"

    
  }

  onlogin(){
   if( this.loginForm.valid){
    //send object to Db

    console.log(this.loginForm.value);


    this.auth.login(this.loginForm.value)
    .subscribe({
      next:(res)=>{
          alert(res.message)
      },
      
      error:(err)=>{
        alert(err?.error.message)
      }

    })
   }

   else{
    //error throw with using tostr and required fields 
    ValidateForm.validateAllFormFeilds(this.loginForm);
   }
  }


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


      


}


