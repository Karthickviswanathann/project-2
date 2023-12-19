import { FormControl, FormGroup } from "@angular/forms";

export default class ValidateForm{
     static   validateAllFormFeilds(formGroup:FormGroup){
        Object.keys(formGroup.controls).forEach(
         item => {const control = formGroup.get(item);
         
           if(control instanceof FormControl) {
             control.markAsDirty({onlySelf:true});
           }
    
           else if(control instanceof FormGroup){  
            this.validateAllFormFeilds(control)
           }
    
    
         } ) 
    
        }
}