import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { RouterModule } from '@angular/router';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service: LoginServiceService, private router:Router) { }

  ngOnInit() {

  }
  userInput = { name: "", password: "", email: "", mobile: "", };
  save() {
    this.service.postUser(this.userInput).subscribe(res => { console.log(res); });
   this.router.navigate(['/SignupSuccess']);
    
  }

  
}

