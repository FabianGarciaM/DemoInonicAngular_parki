import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';
import { ToastController, Platform } from "@ionic/angular";
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsForm: FormGroup;
  U_ID:any;

  constructor(public toastController: ToastController,
              public formBuilder: FormBuilder) {

        this.credentialsForm = this.formBuilder.group({
          user: ["", [Validators.required, Validators.minLength(1)]],
          password: ["", [Validators.required, Validators.minLength(1)]],
          //uid:'f31d8a7d-3e8a-d962-8695-910323954348',
          //tokenFirebase : 'emBxDJl89Ds:APA91bGnZUYbG9V2dhQKenUZhipHf-ghEmRG2Lg-aoUSoVUengGSe3WEVpXbEYj06atrSFfZ1AC4s2oX_3FNayrYh_B6GxP8WxSJBpyv7kJrR3CS-SZaVnCq91eKd5DCILpgKRIcJHx8'
          fechaini: [''],
          fechafin: [''],
          uid: this.U_ID
        });

    }

  ngOnInit() {
     this.DeviceUID();
  }

  async DeviceUID (){
      this.U_ID = await Device.getId();
      console.log(this.U_ID);
      console.log("===================================")
  } 

  async loginUser(){

  }
}
