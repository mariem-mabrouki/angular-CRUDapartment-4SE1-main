import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

addFormUser = new FormGroup({
  username: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
  email : new FormControl('', Validators.email)
  });

  addUser(){
    const newuser = this.addFormUser.value;
    console.log("new user:",newuser);


  }
}
