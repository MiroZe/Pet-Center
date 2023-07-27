import { FormGroup, ValidatorFn } from "@angular/forms";


export function matchPasswordValidator(passValue:string, rePassValue:string) : ValidatorFn {


     return(control) => {
        const group = control as FormGroup;
        const passCtrl = group.get(passValue);
        const rePassCtrl = group.get(rePassValue)
        return passCtrl?.value === rePassCtrl?.value? null : {matchPasswordValidator :true}
     }
}