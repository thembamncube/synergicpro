import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  createForm = this.formBuilder.group({
    email: [''],
    password: ['']
});

get email() {
  return this.createForm.get("email");
}
get password() {
  return this.createForm.get("password");
}

public errorMessages = {

  email: [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Please enter a valid email address' }
  ],
  password:[
    { type: 'required', message: 'Email is required' }
  ]



};


  ngOnInit() {
    this.createForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    })


  }

  }


