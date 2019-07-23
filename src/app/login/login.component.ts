import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    submitted=false;
    registerForm:FormGroup;
    
    constructor(private formBuilder:FormBuilder) { }

    ngOnInit() { 
        this.registerForm=this.formBuilder.group({
            email:['',Validators.required],
            password:['',[Validators.required,Validators.minLength(8)]]
        });
    }
    get f(){return this.registerForm.controls}
    onSubmit(){
        this.submitted=true;
        if(this.registerForm.invalid){
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
}