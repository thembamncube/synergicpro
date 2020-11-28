import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

 
  showpassword = false;
  passwordToggleIcon = 'eye';
  togglePassword() {
    this.showpassword = !this.showpassword;
  }
  constructor(private formBuilder: FormBuilder,private router: Router, public nav: NavController,
    public loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    })
  }
  get email() {
    return this.LoginForm.get("email");
  }
  get password() {
    return this.LoginForm.get('password');
  }

  LoginForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'password number is required' },
      { type: 'pattern', message: 'Please enter a valid password' }
    ],
  };


}
