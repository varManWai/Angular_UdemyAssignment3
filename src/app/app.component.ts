import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretPasswords = ['tuna','salmon'];
  secretPassword = "";
  secretPwdToggle = false;

  addNewSecretPwd(){
    this.secretPasswords.push(this.secretPassword);
    this.secretPassword = '';
  }

  isDisplay (){
    if(this.secretPwdToggle === true){
      this.secretPwdToggle = false;
    }else{
      this.secretPwdToggle = true;
    }
  }

  showSecretPwd(){
    return this.secretPwdToggle === true ? "block" : "none"; 
  }
}
